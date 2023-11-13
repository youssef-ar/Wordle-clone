export default function Board(props){
    return(
        <div className="board">
           <div>
                <div className={`cell ${props.rightLettersRow[0].includes(props.board[0][0])?"green":""} ${props.wrongLettersRow[0].includes(props.board[0][0])?"gray":""} ${props.missplacedLettersRow[0].includes(props.board[0][0])?"beige":""}`}>{props.board[0][0]}</div>
                <div className={`cell ${props.rightLettersRow[0].includes(props.board[0][1])?"green":""} ${props.wrongLettersRow[0].includes(props.board[0][1])?"gray":""} ${props.missplacedLettersRow[0].includes(props.board[0][1])?"beige":""}`}>{props.board[0][1]}</div>
                <div className={`cell ${props.rightLettersRow[0].includes(props.board[0][2])?"green":""} ${props.wrongLettersRow[0].includes(props.board[0][2])?"gray":""} ${props.missplacedLettersRow[0].includes(props.board[0][2])?"beige":""}`}>{props.board[0][2]}</div>
                <div className={`cell ${props.rightLettersRow[0].includes(props.board[0][3])?"green":""} ${props.wrongLettersRow[0].includes(props.board[0][3])?"gray":""} ${props.missplacedLettersRow[0].includes(props.board[0][3])?"beige":""}`}>{props.board[0][3]}</div>
                <div className={`cell ${props.rightLettersRow[0].includes(props.board[0][4])?"green":""} ${props.wrongLettersRow[0].includes(props.board[0][4])?"gray":""} ${props.missplacedLettersRow[0].includes(props.board[0][4])?"beige":""}`}>{props.board[0][4]}</div>
            </div>
            <div >
                <div className={`cell ${props.rightLettersRow[1].includes(props.board[1][0])?"green":""} ${props.wrongLettersRow[1].includes(props.board[1][0])?"gray":""} ${props.missplacedLettersRow[1].includes(props.board[1][0])?"beige":""}`}>{props.board[1][0]}</div>
                <div className={`cell ${props.rightLettersRow[1].includes(props.board[1][1])?"green":""} ${props.wrongLettersRow[1].includes(props.board[1][1])?"gray":""} ${props.missplacedLettersRow[1].includes(props.board[1][1])?"beige":""}`}>{props.board[1][1]}</div>
                <div className={`cell ${props.rightLettersRow[1].includes(props.board[1][2])?"green":""} ${props.wrongLettersRow[1].includes(props.board[1][2])?"gray":""} ${props.missplacedLettersRow[1].includes(props.board[1][2])?"beige":""}`}>{props.board[1][2]}</div>
                <div className={`cell ${props.rightLettersRow[1].includes(props.board[1][3])?"green":""} ${props.wrongLettersRow[1].includes(props.board[1][3])?"gray":""} ${props.missplacedLettersRow[1].includes(props.board[1][3])?"beige":""}`}>{props.board[1][3]}</div>
                <div className={`cell ${props.rightLettersRow[1].includes(props.board[1][4])?"green":""} ${props.wrongLettersRow[1].includes(props.board[1][4])?"gray":""} ${props.missplacedLettersRow[1].includes(props.board[1][4])?"beige":""}`}>{props.board[1][4]}</div>
            </div>
            <div>
                <div className={`cell ${props.rightLettersRow[2].includes(props.board[2][0])?"green":""} ${props.wrongLettersRow[2].includes(props.board[2][0])?"gray":""} ${props.missplacedLettersRow[2].includes(props.board[2][0])?"beige":""}`}>{props.board[2][0]}</div>
                <div className={`cell ${props.rightLettersRow[2].includes(props.board[2][1])?"green":""} ${props.wrongLettersRow[2].includes(props.board[2][1])?"gray":""} ${props.missplacedLettersRow[2].includes(props.board[2][1])?"beige":""}`}>{props.board[2][1]}</div>
                <div className={`cell ${props.rightLettersRow[2].includes(props.board[2][2])?"green":""} ${props.wrongLettersRow[2].includes(props.board[2][2])?"gray":""} ${props.missplacedLettersRow[2].includes(props.board[2][2])?"beige":""}`}>{props.board[2][2]}</div>
                <div className={`cell ${props.rightLettersRow[2].includes(props.board[2][3])?"green":""} ${props.wrongLettersRow[2].includes(props.board[2][3])?"gray":""} ${props.missplacedLettersRow[2].includes(props.board[2][3])?"beige":""}`}>{props.board[2][3]}</div>
                <div className={`cell ${props.rightLettersRow[2].includes(props.board[2][4])?"green":""} ${props.wrongLettersRow[2].includes(props.board[2][4])?"gray":""} ${props.missplacedLettersRow[2].includes(props.board[2][4])?"beige":""}`}>{props.board[2][4]}</div>
            </div>
            <div>
                <div className={`cell ${props.rightLettersRow[3].includes(props.board[3][0])?"green":""} ${props.wrongLettersRow[3].includes(props.board[3][0])?"gray":""} ${props.missplacedLettersRow[3].includes(props.board[3][0])?"beige":""}`}>{props.board[3][0]}</div>
                <div className={`cell ${props.rightLettersRow[3].includes(props.board[3][1])?"green":""} ${props.wrongLettersRow[3].includes(props.board[3][1])?"gray":""} ${props.missplacedLettersRow[3].includes(props.board[3][1])?"beige":""}`}>{props.board[3][1]}</div>
                <div className={`cell ${props.rightLettersRow[3].includes(props.board[3][2])?"green":""} ${props.wrongLettersRow[3].includes(props.board[3][2])?"gray":""} ${props.missplacedLettersRow[3].includes(props.board[3][2])?"beige":""}`}>{props.board[3][2]}</div>
                <div className={`cell ${props.rightLettersRow[3].includes(props.board[3][3])?"green":""} ${props.wrongLettersRow[3].includes(props.board[3][3])?"gray":""} ${props.missplacedLettersRow[3].includes(props.board[3][3])?"beige":""}`}>{props.board[3][3]}</div>
                <div className={`cell ${props.rightLettersRow[3].includes(props.board[3][4])?"green":""} ${props.wrongLettersRow[3].includes(props.board[3][4])?"gray":""} ${props.missplacedLettersRow[3].includes(props.board[3][4])?"beige":""}`}>{props.board[3][4]}</div>
            </div>
            <div>
                <div className={`cell ${props.rightLettersRow[4].includes(props.board[4][0])?"green":""} ${props.wrongLettersRow[4].includes(props.board[4][0])?"gray":""} ${props.missplacedLettersRow[4].includes(props.board[4][0])?"beige":""}`}>{props.board[4][0]}</div>
                <div className={`cell ${props.rightLettersRow[4].includes(props.board[4][1])?"green":""} ${props.wrongLettersRow[4].includes(props.board[4][1])?"gray":""} ${props.missplacedLettersRow[4].includes(props.board[4][1])?"beige":""}`}>{props.board[4][1]}</div>
                <div className={`cell ${props.rightLettersRow[4].includes(props.board[4][2])?"green":""} ${props.wrongLettersRow[4].includes(props.board[4][2])?"gray":""} ${props.missplacedLettersRow[4].includes(props.board[4][2])?"beige":""}`}>{props.board[4][2]}</div>
                <div className={`cell ${props.rightLettersRow[4].includes(props.board[4][3])?"green":""} ${props.wrongLettersRow[4].includes(props.board[4][3])?"gray":""} ${props.missplacedLettersRow[4].includes(props.board[4][3])?"beige":""}`}>{props.board[4][3]}</div>
                <div className={`cell ${props.rightLettersRow[4].includes(props.board[4][4])?"green":""} ${props.wrongLettersRow[4].includes(props.board[4][4])?"gray":""} ${props.missplacedLettersRow[4].includes(props.board[4][4])?"beige":""}`}>{props.board[4][4]}</div>
            </div>
            
            
            
        
        </div>
        
    )
}