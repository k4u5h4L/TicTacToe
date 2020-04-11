
let checkVal = false; // x = false, o = true
let repeatClick = false;

let arr = [];

let check = [];

for (let x = 0; x < 9; x++) {
    arr[x] = 0;
}

let p1Score = 0;
let p2Score = 0;

p1Score =  localStorage.getItem("player1Score");
document.getElementById('player1').setAttribute("data-number", p1Score);

p2Score =  localStorage.getItem("player2Score");
document.getElementById('player2').setAttribute("data-number", p2Score);

if (p1Score > p2Score) {
    localStorage.getItem("winnerPlayer");
    document.getElementById('winner').innerHTML = "Player 1"
    localStorage.setItem("winnerPlayer", "player2");
}
else if (p2Score > p1Score) {
    localStorage.getItem("winnerPlayer");
    document.getElementById('winner').innerHTML = "Player 2"
    localStorage.setItem("winnerPlayer", "player2");
}
else {
    localStorage.getItem("winnerPlayer");
    document.getElementById('winner').innerHTML = "Draw"
    localStorage.setItem("winnerPlayer", "draw");
}

for (let i = 0; i < document.querySelectorAll('img').length; i++) {
    document.querySelectorAll('img')[i].addEventListener("click", function () {
        //console.log(event);
        doThis(i + 1);
        verifyPlay();
    });
}

function resetScores() {
    localStorage.clear();
    p1Score = 0;
    p2Score = 0;
    window.location.reload();
}

function doThis(index) {
    //console.log("The index is " + index);
    let con;
    //let checkVal; // x = false, o = true
    switch(index) {
        case 1: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 2: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 3: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 4: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 5: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 6: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 7: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 8: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        case 9: 
            con = document.querySelectorAll('img')[index - 1];
            //console.log(con);
            if(checkVal && checkTile(index - 1)) {
                con.src = "images/to.png";
                checkVal = false;
                console.log(checkVal);
                arr[index - 1] = 'o'
                check[index - 1] = true;
            }
            else if (!checkVal && checkTile(index - 1)) {
                con.src = "images/tx.png";
                checkVal = true;
                console.log(checkVal);
                arr[index - 1] = 'x'
                check[index - 1] = false;
            }
            else {
                console.log("Choose some other tile.");
            }
            break;
        default:
            console.log("Hey, i don't think this is the way.");
            break;

    }
}

function verifyPlay() {
    if (check[0] == check[4] && check[0] == check[8] && xOrO(check[0])) {
        print(check[0]);
    }
    else if (check[2] == check[4] && check[2] == check[6] && xOrO(check[2])) {
        print(check[2]);
    }
    else if (check[0] == check[1] && check[0] == check[2] && xOrO(check[0])) {
        print(check[0]);
    }
    else if (check[3] == check[4] && check[3] == check[5] && xOrO(check[3])) {
        print(check[3]);
    }
    else if (check[6] == check[7] && check[6] == check[8] && xOrO(check[6])) {
        print(check[6]);
    }
    else if (check[0] == check[3] && check[0] == check[6] && xOrO(check[0])) {
        print(check[0]);
    }
    else if (check[1] == check[4] && check[1] == check[7] && xOrO(check[1])) {
        print(check[1]);
    }
    else if (check[2] == check[5] && check[2] == check[8] && xOrO(check[2])) {
        print(check[2]);
    }
    else {
        checkForDraw();
    }
}

function checkForDraw() {
    /*let k;
    let count = 0;
    for (k = 0; k < 9; k++) {
        if (check[k] != 0) {
            count++;
        }
    }
    if (count == 9) {
        alert("The round is draw.");
    }*/
    if (check[0] == 0 && check[1] == 0 && check[2] == 0 && check[3] == 0 && check[4] == 0 && check[5] == 0 && check[6] == 0 && check[7] == 0 && check[8] == 0 && check[9] == 0) {
        alert("Draw.");
        //window.location.reload();
    }
    else {
        console.log("Continue playing...")
    }
}

function print(temp1) {
    if (temp1 == true) {
        console.log("O wins");
        alert("O wins!");
        updateScore('o');
    }
    else if (temp1 == false) {
        console.log("X wins");
        alert("X wins!");
        updateScore('x');
    }
    else {
        console.log("Error");
    }
}

function updateScore(winningChar) {
    if (winningChar == 'x') {
        p1Score++;
        displayUpdateForX();
    }
    else if (winningChar == 'o') {
        p2Score++;
        displayUpdateForO();
    }
    else {
        console.log("Error finding winner.");
    }
}

function displayUpdateForX() {
    document.getElementById('player1').setAttribute("data-number", p1Score);
    localStorage.setItem("player1Score", p1Score);
    window.location.reload();
}

function displayUpdateForO() {
    document.getElementById('player2').setAttribute("data-number", p2Score);
    localStorage.setItem("player2Score", p2Score);
    window.location.reload();
}

function xOrO(temp) {
    if (temp == true || temp == false) {
        return true;
    }
    else {
        return false;
    }
}

function checkTile(j) {
    if (arr[j] == 0) {
        return true;
    }
    else {
        return false;
    }
}
