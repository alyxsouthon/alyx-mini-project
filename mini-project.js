console.log("Hello!")


let board = [
    [" ", " ", " "], 
    [" ", " ", " "], 
    [" ", " ", " "]
]

let gameWon = false

let currentPlayer = "X"
let counter = 0
const button = document.querySelectorAll("button")

// changing colours of button when hovering over. doesn't work with qSA?
// const buttonColour = document.querySelectorAll("button");
// buttonColour.addEventListener('mouseover', () => {
//     buttonColour.style.opacity = '0.7';
// });

// buttonColour.addEventListener('mouseout', () => {
//     buttonColour.style.opacity = '1';
// });

function handleClick(row, col, btn){
    board[row][col] = "X"
    // If the player is X, put X in the box. If the player is O, put O in the box. 
    if (currentPlayer === "X"){
        board[row][col] = "X"
        btn.textContent = "X"
    }
    else {
        board[row][col] = "O"
        btn.textContent = "O"
    };

    //checkWinner() or currentPlayer? Something?

    counter++
    if (counter % 2 === 0){
        currentPlayer = "X"
    }
    else{
        currentPlayer = "O"
    }
    
    console.log(board)
}

const box = document.getElementById('box');


function checkWinner(currentPlayer) {
    //upper row
    if (board[0][1] === board[0][0] && board[0][1] === board[0][2] !== "") {
        console.log("Winner")
        alert(`Winner! Player ${currentPlayer} wins`)
    }
    //lower row
    if (board[2][1] === board[2][0] && board[2][1] === board[2][2] !== "") {
        console.log("Winner")
        alert(`Winner! Player ${currentPlayer} wins`)
    }
    //left column
    if (board[1][0] === board[0][0] && board[1][0] === board[2][0] !== "") {
        console.log("Winner")
        alert(`Winner! Player ${currentPlayer} wins`)
    }
    //right column
    if (board[1][2] === board[0][2] && board[1][2] === board[2][2] !== "") {
        console.log("Winner")
        alert(`Winner! Player ${currentPlayer} wins`)
    }
    //centre column and row
    if (board[1][1] !== "" &&
        (board[1][1] === board[0][1] && board[1][1] === board[2][1]) ||
        (board[1][1] === board[1][0] && board[1][1] === board[1][2])
    ) {
        console.log("Winner")
        alert(`Winner! Player ${currentPlayer} wins`)
    }
    //diagonals
    if (board[1][1] !== "" &&
        (board[1][1] === board[0][0] && board[1][1] === board[2][2]) ||
        (board[1][1] === board[0][2] && board[1][1] === board[2][0])
    ) {
        console.log("Winner")
        alert(`Winner! Player ${currentPlayer} wins`)
    }    
}


