const gameBoard = document.querySelector(".game-board")
const player1 = "X";
const player2 = "O";
let currentPlayer ;
(Math.random() > 0.5)? currentPlayer = player2 : currentPlayer = player1 ;
const gameOver = document.querySelector(".game-over");
const playerText = document.querySelector(".player");


const handleClick = (event) =>{
    console.log(event.target)
    const square = event.target
    if( square.innerText){
        console.log("Square already filled")

    }else{
        console.log("filling square")
        const span = document.createElement("span")
        span.innerText = currentPlayer;
        square.appendChild(span)

        if(checkWin(currentPlayer) == 1){
            console.log()
            gameOver.style.display = "flex";
            document.querySelector(".winner-text").innerText = `Player ${currentPlayer} Wins`;
        }
        else {
            (currentPlayer == player1)? currentPlayer = player2 : currentPlayer = player1;
            playerText.innerHTML = `It's player <span>${currentPlayer}'s</span> turn to play` ;
        }
        

    }
}


const squaresFragment = document.createDocumentFragment();

for (let i = 1; i< 10; i++){
    const square = document.createElement("div")
    square.classList = ["square"]
    square.id = `square-${i}`
    squaresFragment.appendChild(square)
}

gameBoard.appendChild(squaresFragment)

gameBoard.addEventListener("click", handleClick);
const squares = gameBoard.querySelectorAll(".square");

const clearBoard = () =>{
    gameBoard.querySelectorAll(".square").forEach(square =>  square.innerHTML="")
}
startGame();

function checkWin(player){
    //Player 1 wins
    if(squares[0].innerText  == player && squares[1].innerText  == player && squares[2].innerText  == player) return 1;
    else if(squares[0].innerText == player && squares[4].innerText  == player && squares[8].innerText  == player) return 1;
    else if(squares[0].innerText  == player && squares[3].innerText  == player && squares[6].innerText  == player) return 1;
    else if(squares[1].innerText  == player && squares[4].innerText  == player && squares[7].innerText  == player) return 1;
    else if(squares[2].innerText  == player && squares[4].innerText  == player && squares[6].innerText  == player) return 1;
    else if(squares[2].innerText  == player && squares[5].innerText  == player && squares[8].innerText  == player) return 1;
    else if(squares[3].innerText  == player && squares[4].innerText  == player && squares[5].innerText  == player) return 1;
    else if(squares[6].innerText  == player && squares[7].innerText  == player && squares[8].innerText  == player) return 1;

    else return 0;

    
}

function startGame(){
    clearBoard();
    
    gameOver.style.display = "none";
    choosePlayer()
    playerText.innerHTML = `It's player <span>${currentPlayer}'s</span> turn to play` ;

}
function choosePlayer(){
    (Math.random() > 0.5)? currentPlayer = player2 : currentPlayer = player1 ;
}
