let topLeft = document.getElementById('top-left');
let topMiddle = document.getElementById('top-middle');
let topRight = document.getElementById('top-right');
let left = document.getElementById('left');
let middle = document.getElementById('middle');
let right = document.getElementById('right');
let bottomLeft = document.getElementById('bottom-left');
let bottomMiddle = document.getElementById('bottom-middle');
let bottomRight = document.getElementById('bottom-right');

let xScore = document.getElementById('x-score');
let oScore = document.getElementById('o-score');

let reset = document.getElementById('reset');

let turn = 1;

function test() {
    console.log('This test was successful');
}

const gameBoard = [
    {
        position: 'topLeft',
        available: true,
        value: ' '
    },
    {
        position: 'topMid',
        available: true,
        value: ' '
    },
    {
        position: 'topRight',
        available: true,
        value: ' '
    },
    {
        position: 'midLeft',
        available: true,
        value: ' '
    },
    {
        position: 'midMid',
        available: true,
        value: ' '
    },
    {
        position: 'midRight',
        available: true,
        value: ' '
    },
    {
        position: 'botLeft',
        available: true,
        value: ' '
    },
    {
        position: 'botMid',
        available: true,
        value: ' '
    },
    {
        position: 'botRight',
        available: true,
        value: ' '
    }
];

function createPlayer(name) {
    const playerName = name;

    let score = 0;
    const getScore = () => score;
    const addScore = () => score++;

    return {playerName, getScore, addScore};
}

const player = [createPlayer('X'), createPlayer('O')];

const postions = gameBoard.map(obj => obj.position); //put these into a setBoard function
const availibility = gameBoard.map(obj => obj.available); //that will run when the page opens
const spaceValue = gameBoard.map(obj => obj.value); //and map it to the reset button to restart

let col1 = [spaceValue[0], spaceValue[3], spaceValue[6]];
let col2 = [spaceValue[1], spaceValue[4], spaceValue[7]];
let col3 = [spaceValue[2], spaceValue[5], spaceValue[8]];
let row1 = [spaceValue[0], spaceValue[1], spaceValue[2]];
let row2 = [spaceValue[3], spaceValue[4], spaceValue[5]];
let row3 = [spaceValue[6], spaceValue[7], spaceValue[8]];
let diag1 = [spaceValue[0], spaceValue[4], spaceValue[8]];
let diag2 = [spaceValue[2], spaceValue[4], spaceValue[6]];

function gameWin() {
    console.log('somebody won');
}

function gameDraw() {
    console.log('draw');
}

function playTurn() {
    if (turn % 2 !== 0) {
        this.innerHTML = 'X';
        turn++;
    } else {
        this.innerHTML = 'O';
        turn++;
    }
    if (col1.every(v => v === 'X') || col2.every(v => v === 'X') || col3.every(v => v === 'X') || row1.every(v => v === 'X') || row2.every(v => v === 'X') || row3.every(v => v === 'X') || diag1.every(v => v === 'X') || diag2.every(v => v === 'X') || col1.every(v => v === 'O') || col2.every(v => v === 'O') || col3.every(v => v === 'O') || row1.every(v => v === 'O') || row2.every(v => v === 'O') || row3.every(v => v === 'O') || diag1.every(v => v === 'O') || diag2.every(v => v === 'O')) {
        gameWin();
    } else if (availibility.every(v => v === false)) {
        gameDraw();
    }
}

function gameState() {
    if(availibility.every(v => v === false)) {
        gameDraw();
    } else {
        playTurn();
    }
}

topLeft.addEventListener('click', playTurn);
topMiddle.addEventListener('click', playTurn);
topRight.addEventListener('click', playTurn);
left.addEventListener('click', playTurn);
middle.addEventListener('click', playTurn);
right.addEventListener('click', playTurn);
bottomLeft.addEventListener('click', playTurn);
bottomMiddle.addEventListener('click', playTurn);
bottomRight.addEventListener('click', playTurn);

if (col1.every(v => v === col1[0]) || col2.every(v => v === col2[0]) || col3.every(v => v === col3[0]) || row1.every(v => v === row1[0]) || row2.every(v => v === row2[0]) || row3.every(v => v === row3[0]) || diag1.every(v => v === diag1[0]) || diag2.every(v => v === diag2[0])) {

}