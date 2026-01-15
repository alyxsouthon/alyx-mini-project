console.log("Hello!")


let board = [
    [" ", " ", " "], 
    [" ", " ", " "], 
    [" ", " ", " "]
]

let currentPlayer = "X"
const button1 = document.getElementById("00")

//function checkWinner
// const checkWinner = () => {
//     if 
// }
// if there are 3 Xs or Os in a row, gameOver = true
// else, gameOver = false

// function to make a move. The player decides which square they want to press. 
// assign each button an index on the array? need to tell js that a button has been pressed on the page
// switch the player at the end of this function?
function makeMove(row, col){
    // player X picks square with row index i and column index j
    // addEventListener(click)???????
}

// function to handle the click. What happens once the player chooses a square?
// This needs to call on makeMove? the player has decided a button, what happens with it?
function handleClick(row, col){
    // If the player is X, put X in the box. If the player is O, put O in the box. 
    // This works!!!!!! how to generalise it?
    button1.addEventListener("click", () => {
        if (currentPlayer === "X"){
            button1.textContent = "X"
        }
        else {
            button1.textContent = "O"
        }
    });
    // number++
    // console.log(number)
}


