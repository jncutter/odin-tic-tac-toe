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
} //this works how expected

function gameState() {
    for (let i = 1; i < 9; i++) {

    }
}

function gameWin() {
    console.log('somebody won');
}

const player = [createPlayer('X'), createPlayer('O')];

const postions = gameBoard.map(obj => obj.position);
const availibility = gameBoard.map(obj => obj.available);
const spaceValue = gameBoard.map(obj => obj.value);

spaceValue[4] = 'X';
spaceValue[2] = '0';
spaceValue[0] = 'X';
spaceValue[8] = '0';
spaceValue[5] = 'X';
spaceValue[3] = '0';
spaceValue[1] = 'X';
spaceValue[7] = '0';
spaceValue[6] = 'X';

let col1 = [spaceValue[0], spaceValue[3], spaceValue[6]];
let col2 = [spaceValue[1], spaceValue[4], spaceValue[7]];
let col3 = [spaceValue[2], spaceValue[5], spaceValue[8]];
let row1 = [spaceValue[0], spaceValue[1], spaceValue[2]];
let row2 = [spaceValue[3], spaceValue[4], spaceValue[5]];
let row3 = [spaceValue[6], spaceValue[7], spaceValue[8]];
let diag1 = [spaceValue[0], spaceValue[4], spaceValue[8]];
let diag2 = [spaceValue[2], spaceValue[4], spaceValue[6]];

if (col1.every(v => v === col1[0]) || col2.every(v => v === col2[0]) || col3.every(v => v === col3[0]) || row1.every(v => v === row1[0]) || row2.every(v => v === row2[0]) || row3.every(v => v === row3[0]) || diag1.every(v => v === diag1[0]) || diag2.every(v => v === diag2[0])) {
    gameWin();
}

console.log(spaceValue[0] + '|' + spaceValue[1] + '|' + spaceValue[2]);
console.log('-|-|-');
console.log(spaceValue[3] + '|' + spaceValue[4] + '|' + spaceValue[5]);
console.log('-|-|-');
console.log(spaceValue[6] + '|' + spaceValue[7] + '|' + spaceValue[8]);