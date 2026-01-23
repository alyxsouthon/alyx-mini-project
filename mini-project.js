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

    if (currentPlayer === "X"){
        btn.textContent = "X"
        board[row][col] = "X"
    }
    else {
        btn.textContent = "O"
        board[row][col] = "O"
    };

    checkWinner(currentPlayer)

    counter++
    if (counter % 2 === 0){
        currentPlayer = "X"
    }
    else{
        currentPlayer = "O"
    }
    
    //console.log(board)
}

const box = document.getElementById('box')


function checkWinner(currentPlayer) {
    //upper row
    if (board[0][1] === board[0][0] && board[0][1] === board[0][2] && board[0][2] !== " ") {
        console.log("Winner")
        box.style.display = "block"
        box.textContent = `Game over! Player ${currentPlayer} wins!`
    }
    //lower row
    if (board[2][1] === board[2][0] && board[2][1] === board[2][2] && board[2][2] !== " ") {
        console.log("Winner")
        box.style.display = "block"
        box.textContent = `Game over! Player ${currentPlayer} wins!`
    }
    //left column
    if (board[1][0] === board[0][0] && board[1][0] === board[2][0] && board[2][0] !== " ") {
        console.log("Winner")
        box.style.display = "block"
        box.textContent = `Game over! Player ${currentPlayer} wins!`
    }
    //right column
    if (board[1][2] === board[0][2] && board[1][2] === board[2][2] && board[2][2] !== " ") {
        console.log("Winner")
        box.style.display = "block"
        box.textContent = `Game over! Player ${currentPlayer} wins!`
    }
    //centre column and row
    if (board[1][1] !== " " &&
        (board[1][1] === board[0][1] && board[1][1] === board[2][1]) ||
        board[1][1] !== " " &&
        (board[1][1] === board[1][0] && board[1][1] === board[1][2])
    ) {
        console.log("Winner")
        box.style.display = "block"
        box.textContent = `Game over! Player ${currentPlayer} wins!`
    }
    //diagonals
    if (board[1][1] !== " " &&
        (board[1][1] === board[0][0] && board[1][1] === board[2][2]) ||
        board[1][1] !== " " &&
        (board[1][1] === board[0][2] && board[1][1] === board[2][0])
    ) {
        console.log("Winner")
        box.style.display = "block"
        box.textContent = `Game over! Player ${currentPlayer} wins!`
    }    
}

// function checkWinner() {
//     board.forEach(checkIndex)
// }

// function checkIndex() {
//     if (board[i][j] === board[i][j-1] && board[i][j] === board[i][j+1] && board[i][j+1] !== " ") {
//         console.log("Winner")
//         box.style.display = "block"
//         box.textContent = `Game over! Player ${currentPlayer} wins!`
//         }
// }

//horizontal rows
// forEach((board[i][j]) => {
//     if (board[i][j] !== " " && board[i][j])
// })

