
export default function KeyBoard(props){
    

    function handleClick(event){
        if(event.target.id=="DELETE"){
            
            let updatedCurrentColumn = (props.currentColumn === 4 && props.board[props.currentRow][props.currentColumn]!="") ? 4 : props.currentColumn - 1;
            if(updatedCurrentColumn<0){
                updatedCurrentColumn=0;
            }
            
            props.setCurrentColumn(updatedCurrentColumn)
            props.setBoard((prevBoard)=>{
            let aux= prevBoard.map((row,rowId)=>{
                return(
                    row.map((column, columnId)=>{
                        if(rowId == props.currentRow && columnId == updatedCurrentColumn){
                            return ""
                        }else{
                            return row[columnId]
                        }
                    })
                )
            })
            
            return aux
        })
        props.setError(false)
        clearTimeout(timeOutId)
        clearTimeout(props.timeoutId)
        
        
    }else{
        props.setBoard((prevBoard)=>{
            let aux= prevBoard.map((row,rowId)=>{
                return(
                    row.map((column, columnId)=>{
                        if(rowId == props.currentRow && columnId == props.currentColumn && row[columnId]==""){
                            return event.target.id
                        }else{
                            return row[columnId]
                        }
                    })
                )
            })
            
            return aux
            
        })
      
        props.setCurrentColumn((prevstate)=>{
            if(prevstate==4){
                return 4
            }else{
                return prevstate+1
            }
        })
        props.setError(false)
        clearTimeout(timeOutId)
        clearTimeout(props.timeoutId)
    }}

    function handleEnter(){
        const currentWord=((props.board[props.currentRow]).join("")).toLowerCase()
        //checking if the word is valid 
        if(props.wordList.includes(currentWord)){

            //updating the state
            for(let i=0;i<5;i++){
                if(props.word.includes(currentWord[i]) && props.word[i]==currentWord[i]){
                    if((props.missplacedLetters).includes(currentWord[i].toUpperCase())){
                        props.setMissplacedLetters((prevState)=>{
                            let cpy =prevState.map((element)=>{
                                if(element!=currentWord[i].toUpperCase()){
                                    return element
                                }
                            })
                            return cpy
                        })
                    }
                    
                    if(((props.rightLetters).includes(currentWord[i].toUpperCase()))==false){
                        props.setRightLetters((prevState)=>{
                            return [...prevState,currentWord[i].toUpperCase()]
                        })
                    }
                    props.setRightLettersRow((prevState)=>{
                        let cpy=prevState
                        cpy[props.currentRow].push(currentWord[i].toUpperCase())
                        return cpy
                    })
                    
                }else if(props.word.includes(currentWord[i]) && props.word[i]!=currentWord[i]){
                    if(!props.missplacedLetters.includes(currentWord[i].toUpperCase())){
                        props.setMissplacedLetters((prevState)=>{
                            return [...prevState,currentWord[i].toUpperCase()]
                        })
                    }
                    props.setMissplacedLettersRow((prevState)=>{
                        let cpy=prevState
                        cpy[props.currentRow].push(currentWord[i].toUpperCase())
                        return cpy
                    })
                    
                }else{
                    props.setWrongLetters((prevState)=>{
                        return [...prevState,currentWord[i].toUpperCase()]
                    })
                    props.setWrongLettersRow((prevState)=>{
                        let cpy=prevState
                        cpy[props.currentRow].push(currentWord[i].toUpperCase())
                        return cpy
                    })

                }
            }
            //checking if the game is over 
            if(currentWord!=props.word && props.currentRow==4){
                props.setGameOver(true)
                props.setWon(false)
            }else if(currentWord!=props.word){
                props.setCurrentRow((prevState)=>{
                    return prevState+1
                })
                props.setCurrentColumn(0)
            }else{
                props.setGameOver(true)
                props.setWon(true)
            }
            

            
        }else{
            props.setError(true)
          const timeOutId = setTimeout(()=>{
            props.setError(false)
          },1500)
        }
    }


    return(
        <div className="keyboard">
        <div className="keyboard-line">
            <div className={`key ${props.rightLetters.includes("A")?"green":""} ${props.wrongLetters.includes("A")?"gray":""} ${props.missplacedLetters.includes("A")?"beige":""}`} id="A" onClick={handleClick}>A</div>
            <div className={`key ${props.rightLetters.includes("Z")?"green":""} ${props.wrongLetters.includes("Z")?"gray":""} ${props.missplacedLetters.includes("Z")?"beige":""}`} id="Z" onClick={handleClick}>Z</div>
            <div className={`key ${props.rightLetters.includes("E")?"green":""} ${props.wrongLetters.includes("E")?"gray":""} ${props.missplacedLetters.includes("E")?"beige":""}`} id="E" onClick={handleClick}>E</div>
            <div className={`key ${props.rightLetters.includes("R")?"green":""} ${props.wrongLetters.includes("R")?"gray":""} ${props.missplacedLetters.includes("R")?"beige":""}`} id="R" onClick={handleClick}>R</div>
            <div className={`key ${props.rightLetters.includes("T")?"green":""} ${props.wrongLetters.includes("T")?"gray":""} ${props.missplacedLetters.includes("T")?"beige":""}`} id="T" onClick={handleClick}>T</div>
            <div className={`key ${props.rightLetters.includes("Y")?"green":""} ${props.wrongLetters.includes("Y")?"gray":""} ${props.missplacedLetters.includes("Y")?"beige":""}`} id="Y" onClick={handleClick}>Y</div>
            <div className={`key ${props.rightLetters.includes("U")?"green":""} ${props.wrongLetters.includes("U")?"gray":""} ${props.missplacedLetters.includes("U")?"beige":""}`} id="U" onClick={handleClick}>U</div>
            <div className={`key ${props.rightLetters.includes("I")?"green":""} ${props.wrongLetters.includes("I")?"gray":""} ${props.missplacedLetters.includes("I")?"beige":""}`} id="I" onClick={handleClick}>I</div>
            <div className={`key ${props.rightLetters.includes("O")?"green":""} ${props.wrongLetters.includes("O")?"gray":""} ${props.missplacedLetters.includes("O")?"beige":""}`} id="O" onClick={handleClick}>O</div>
            <div className={`key ${props.rightLetters.includes("P")?"green":""} ${props.wrongLetters.includes("P")?"gray":""} ${props.missplacedLetters.includes("P")?"beige":""}`} id="P" onClick={handleClick}>P</div>
        </div>
        <div className="keyboard-line">
            <div className={`key ${props.rightLetters.includes("Q")?"green":""} ${props.wrongLetters.includes("Q")?"gray":""} ${props.missplacedLetters.includes("Q")?"beige":""}`} id="Q" onClick={handleClick}>Q</div>
            <div className={`key ${props.rightLetters.includes("S")?"green":""} ${props.wrongLetters.includes("S")?"gray":""} ${props.missplacedLetters.includes("S")?"beige":""}`} id="S" onClick={handleClick}>S</div>
            <div className={`key ${props.rightLetters.includes("D")?"green":""} ${props.wrongLetters.includes("D")?"gray":""} ${props.missplacedLetters.includes("D")?"beige":""}`} id="D" onClick={handleClick}>D</div>
            <div className={`key ${props.rightLetters.includes("F")?"green":""} ${props.wrongLetters.includes("F")?"gray":""} ${props.missplacedLetters.includes("F")?"beige":""}`} id="F" onClick={handleClick}>F</div>
            <div className={`key ${props.rightLetters.includes("G")?"green":""} ${props.wrongLetters.includes("G")?"gray":""} ${props.missplacedLetters.includes("G")?"beige":""}`} id="G" onClick={handleClick}>G</div>
            <div className={`key ${props.rightLetters.includes("H")?"green":""} ${props.wrongLetters.includes("H")?"gray":""} ${props.missplacedLetters.includes("H")?"beige":""}`} id="H" onClick={handleClick}>H</div>
            <div className={`key ${props.rightLetters.includes("J")?"green":""} ${props.wrongLetters.includes("J")?"gray":""} ${props.missplacedLetters.includes("J")?"beige":""}`} id="J" onClick={handleClick}>J</div>
            <div className={`key ${props.rightLetters.includes("K")?"green":""} ${props.wrongLetters.includes("K")?"gray":""} ${props.missplacedLetters.includes("K")?"beige":""}`} id="K" onClick={handleClick}>K</div>
            <div className={`key ${props.rightLetters.includes("L")?"green":""} ${props.wrongLetters.includes("L")?"gray":""} ${props.missplacedLetters.includes("L")?"beige":""}`} id="L" onClick={handleClick}>L</div>
            
        </div>
        <div className="keyboard-line">
            <div className="key ENTER" id="ENTER" onClick={handleEnter}>ENTER</div>
            <div className={`key ${props.rightLetters.includes("M")?"green":""} ${props.wrongLetters.includes("M")?"gray":""} ${props.missplacedLetters.includes("M")?"beige":""}`} id="M" onClick={handleClick}>M</div>
            <div className={`key ${props.rightLetters.includes("W")?"green":""} ${props.wrongLetters.includes("W")?"gray":""} ${props.missplacedLetters.includes("W")?"beige":""}`} id="W" onClick={handleClick}>W</div>
            <div className={`key ${props.rightLetters.includes("X")?"green":""} ${props.wrongLetters.includes("X")?"gray":""} ${props.missplacedLetters.includes("X")?"beige":""}`} id="X" onClick={handleClick}>X</div>
            <div className={`key ${props.rightLetters.includes("C")?"green":""} ${props.wrongLetters.includes("C")?"gray":""} ${props.missplacedLetters.includes("C")?"beige":""}`} id="C" onClick={handleClick}>C</div>
            <div className={`key ${props.rightLetters.includes("V")?"green":""} ${props.wrongLetters.includes("V")?"gray":""} ${props.missplacedLetters.includes("V")?"beige":""}`} id="V" onClick={handleClick}>V</div>
            <div className={`key ${props.rightLetters.includes("B")?"green":""} ${props.wrongLetters.includes("B")?"gray":""} ${props.missplacedLetters.includes("B")?"beige":""}`} id="B" onClick={handleClick}>B</div>
            <div className={`key ${props.rightLetters.includes("N")?"green":""} ${props.wrongLetters.includes("N")?"gray":""} ${props.missplacedLetters.includes("N")?"beige":""}`} id="N" onClick={handleClick}>N</div>
            <div className="key DELETE" id="DELETE" onClick={handleClick}>DELETE</div>
        </div>
        </div>
    )
}