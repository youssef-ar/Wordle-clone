import { useEffect, useState } from 'react'
import './App.css'
import './components/header'
import Header from './components/header'
import Board from './components/board'
import KeyBoard from './components/keyboard'
import Lost from './components/lost'
import Won from './components/won'
import wordList from './words.json'
import Error from './components/error'

function App() {
  const [board,setBoard]=useState([["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""]])

  const [currentRow,setCurrentRow] = useState(0)

  const [currentColumn, setCurrentColumn]=useState(0)

  const [missplacedLetters, setMissplacedLetters]=useState([])
  const [wrongLetters, setWrongLetters]=useState([])
  const [rightLetters, setRightLetters]=useState([])
  const [missplacedLettersRow,setMissplacedLettersRow]=useState([[],[],[],[],[]])
  const [rightLettersRow,setRightLettersRow]=useState([[],[],[],[],[]])
  const [wrongLettersRow,setWrongLettersRow]=useState([[],[],[],[],[]])
  const [gameOver,setGameOver]=useState(false)
  const [won,setWon]=useState(false)
  const [word,setWord]=useState("")
  const [playAgain, setPlayAgain]=useState(false)
  const [error,setError]=useState(false)

  let timeOutId=""
  
  //fetching data
  const generateRandomWord=()=>{
    const randomIndex = Math.floor(Math.random() * 5758);
    return wordList[randomIndex]
  }
  useEffect(() => {
  
      const newWord=generateRandomWord();
      setWord(newWord);

  }, [playAgain]);


useEffect(() => {
  const handleKeyDown = (event) => {
    if(!gameOver){
    if(event.key==="Enter"){

      const currentWord=((board[currentRow]).join("")).toLowerCase()
      
        //checking if the word is valid 
        if(wordList.includes(currentWord)){

            //updating the state
            for(let i=0;i<5;i++){
                if(word.includes(currentWord[i]) && word[i]==currentWord[i]){
                    if((missplacedLetters).includes(currentWord[i].toUpperCase())){
                        setMissplacedLetters((prevState)=>{
                            let cpy =prevState.map((element)=>{
                                if(element!=currentWord[i].toUpperCase()){
                                    return element
                                }
                            })
                            return cpy
                        })
                    }
                    
                    if(((rightLetters).includes(currentWord[i].toUpperCase()))==false){
                        setRightLetters((prevState)=>{
                            return [...prevState,currentWord[i].toUpperCase()]
                        })
                    }
                    setRightLettersRow((prevState)=>{
                        let cpy=prevState
                        cpy[currentRow].push(currentWord[i].toUpperCase())
                        return cpy
                    })
                    
                }else if(word.includes(currentWord[i]) && word[i]!=currentWord[i]){
                    if(!missplacedLetters.includes(currentWord[i].toUpperCase())){
                        setMissplacedLetters((prevState)=>{
                            return [...prevState,currentWord[i].toUpperCase()]
                        })
                    }
                    setMissplacedLettersRow((prevState)=>{
                        let cpy=prevState
                        cpy[currentRow].push(currentWord[i].toUpperCase())
                        return cpy
                    })
                    
                }else{
                    setWrongLetters((prevState)=>{
                        return [...prevState,currentWord[i].toUpperCase()]
                    })
                    setWrongLettersRow((prevState)=>{
                        let cpy=prevState
                        cpy[currentRow].push(currentWord[i].toUpperCase())
                        return cpy
                    })

                }
            }
            //checking if the game is over 
            if(currentWord!=word && currentRow==4){
                setGameOver(true)
                setWon(false)
            }else if(currentWord!=word){
                setCurrentRow((prevState)=>{
                    return prevState+1
                })
                setCurrentColumn(0)
            }else{
                setGameOver(true)
                setWon(true)
            }
            

            
        }else{
          setError(true)
          timeoutId = setTimeout(()=>{
            setError(false)
          },1500)
        }
    }else if(event.key==="Backspace"){
      let updatedCurrentColumn = (currentColumn === 4 && board[currentRow][currentColumn]!="") ? 4 : currentColumn - 1;
            if(updatedCurrentColumn<0){
                updatedCurrentColumn=0;
            }
            
            setCurrentColumn(updatedCurrentColumn)
            setBoard((prevBoard)=>{
            let aux= prevBoard.map((row,rowId)=>{
                return(
                    row.map((column, columnId)=>{
                        if(rowId == currentRow && columnId == updatedCurrentColumn){
                            return ""
                        }else{
                            return row[columnId]
                        }
                    })
                )
            })
            
            return aux
        })
        setError(false)
        clearTimeout(timeoutId)
    }else if((event.key).toLowerCase().charCodeAt(0)>=97 && (event.key).toLowerCase().charCodeAt(0)<=122 && (event.key).length===1){
      setBoard((prevBoard) => {
        let updatedBoard= prevBoard.map((row,rowId)=>{
          return(
              row.map((column, columnId)=>{
                  if(rowId === currentRow && columnId === currentColumn && row[columnId]===""){
                      return (event.key).toUpperCase()
                  }else{
                      return row[columnId]
                  }
              })
          )
      });
        return updatedBoard;
      });
  
      setCurrentColumn((prevstate)=>{
        if(prevstate===4){
            return 4
        }else{
            return prevstate+1
        }
    })
    setError(false)
    clearTimeout(timeoutId)
    }
    
}
  };

  document.addEventListener('keydown', handleKeyDown);

  // Cleanup the event listener when the component unmounts
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [currentRow, currentColumn, setBoard,board,missplacedLetters,setMissplacedLetters,missplacedLettersRow,setMissplacedLettersRow,rightLetters,setRightLetters,rightLettersRow,setRightLettersRow,wrongLetters,setWrongLetters,wrongLettersRow,setWrongLettersRow,gameOver,setGameOver,won,setWon,playAgain,setPlayAgain,setError]);



  return (
    <>
    <Header></Header>
    <main>
      <Board board={board}
             missplacedLetters={missplacedLetters}
             wrongLetters={wrongLetters}
             rightLetters={rightLetters}
             rightLettersRow={rightLettersRow}
             missplacedLettersRow={missplacedLettersRow}
             wrongLettersRow={wrongLettersRow}
             
      ></Board>
      <KeyBoard setBoard ={setBoard}
                board={board}
                setCurrentColumn = {setCurrentColumn}
                setCurrentRow = {setCurrentRow}
                currentColumn={currentColumn}
                currentRow={currentRow}
                missplacedLetters={missplacedLetters}
                setMissplacedLetters={setMissplacedLetters}
                wrongLetters={wrongLetters}
                setWrongLetters={setWrongLetters}
                rightLetters={rightLetters}
                setRightLetters={setRightLetters}
                setMissplacedLettersRow={setMissplacedLettersRow}
                setRightLettersRow={setRightLettersRow}
                setWrongLettersRow={setWrongLettersRow}
                setGameOver={setGameOver}
                setWon={setWon}
                word={word}
                wordList={wordList}
                setError={setError}
                timeOutId={timeOutId}
                
                

      ></KeyBoard>
    </main>
    {gameOver &&!won && <Lost word={word}
                       setGameOver={setGameOver}
                       setBoard={setBoard}
                       setCurrentRow={setCurrentRow}
                       setCurrentColumn={setCurrentColumn}
                       setMissplacedLetters={setMissplacedLetters}
                       setWrongLetters={setWrongLetters}
                       setRightLetters={setRightLetters}
                       setMissplacedLettersRow={setMissplacedLettersRow}
                       setRightLettersRow={setRightLettersRow}
                       setWrongLettersRow={setWrongLettersRow}
                       setPlayAgain={setPlayAgain}
                       
    ></Lost>}
    {gameOver && won && <Won 
                       setGameOver={setGameOver}
                       setBoard={setBoard}
                       setCurrentRow={setCurrentRow}
                       setCurrentColumn={setCurrentColumn}
                       setMissplacedLetters={setMissplacedLetters}
                       setWrongLetters={setWrongLetters}
                       setRightLetters={setRightLetters}
                       setMissplacedLettersRow={setMissplacedLettersRow}
                       setRightLettersRow={setRightLettersRow}
                       setWrongLettersRow={setWrongLettersRow}
                       setPlayAgain={setPlayAgain}
    ></Won>}
    {error && <Error></Error>}
    </>
  )
}

export default App



