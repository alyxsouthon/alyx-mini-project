console.log("Hello!")


let board = [
    [" ", " ", " "], 
    [" ", " ", " "], 
    [" ", " ", " "]
]

let currentPlayer = "X"
let counter = 0
const button = document.querySelectorAll("button")

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


