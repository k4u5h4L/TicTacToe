
let checkVal = false; // x = false, o = true
let repeatClick = false;
for (let i = 0; i < document.querySelectorAll('img').length; i++) {
    document.querySelectorAll('img')[i].addEventListener("click", function () {
        //console.log(event);
        doThis(i + 1);
    });
}


function doThis(index) {
    //console.log("The index is " + index);
    let con;
    //let checkVal; // x = false, o = true
    switch(index) {
        case 1: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
            }
            break;
        case 2: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            console.log(checkVal);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        case 3: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        case 4: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        case 5: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        case 6: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        case 7: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        case 8: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        case 9: 
            con = document.querySelectorAll('img')[index - 1];
            console.log(con);
            if(checkVal) {
                con.src = "images/to.png";
                checkVal = false;
            }
            else {
                con.src = "images/tx.png";
                checkVal = true;
            }
            break;
        default:
            console.log("Hey, i don't think this is the way.");
            break;

    }
}

function checkTurn(checkVal1) {
    if (checkVal1 == 'o') {
        return true;
    }
    else {
        return false;
    }
}









































/*
const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

*/