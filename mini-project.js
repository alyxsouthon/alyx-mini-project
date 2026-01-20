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

    counter++
    if (counter%2 === 0){
        currentPlayer = "X"
    }
    else{
        currentPlayer = "O"
    }
    
    console.log(board)
}

const box = document.getElementById('box');

// function gameOver() {
//     if (board[0][1] === board[0][0] && board[0][1] === board[0][2] != "") {
//         gameWon = True
//     }
//     if gameWon
// }

// const winConds = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]

