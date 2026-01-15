console.log("Hello!")

let number = 0

//let currentPlayer = "X"
//let gameOver = false

//function checkWinner

// function to make a move. The player decides which square they want to press. 
// assign each button an index on the array? need to tell js that a button has been pressed on the page
// switch the player at the end of this function?
// function makeMove(row, col){

//}

// function to handle the click. What happens once the player chooses a square?
// If the player is X, put X in the box. If the player is O, put O in the box. 
// This needs to call on makeMove? the player has decided a button, what happens with it?
function handleClick(row, col){

    number++
    console.log(number)
}

let board = [
    [" ", " ", " "], 
    [" ", " ", " "], 
    [" ", " ", " "]
]

let currentPlayer = "X"
const button1 = document.getElementById("00")

//this works!!!!!! how to generalise it?
button1.addEventListener("click", () => {
    if (currentPlayer === "X"){
        button1.textContent = "X"
    }
    else {
        button1.textContent = "O"
    }
});

