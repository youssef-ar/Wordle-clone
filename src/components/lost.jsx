export default function Lost(props){
    function handleClick(){
        props.setGameOver(false)
        props.setCurrentRow(0)
        props.setCurrentColumn(0)
        props.setBoard([["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]])
        props.setMissplacedLetters([])
        props.setWrongLetters([])
        props.setRightLetters([])
        props.setMissplacedLettersRow([[],[],[],[],[]])
        props.setRightLettersRow([[],[],[],[],[]])
        props.setWrongLettersRow([[],[],[],[],[]])
        props.setPlayAgain((prevState)=>{
            return !prevState
        })
    }
    return(
        <>
        <div className="container">
            <div className="frame">
                <h1>Correct word:</h1>
                <h1>{props.word.toUpperCase()}</h1>
                <button onClick={handleClick} className="playagain-button">Play again</button>
            </div>
        </div>
        </>
    )
}