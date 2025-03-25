let xScore = document.getElementById('x-score');
let oScore = document.getElementById('o-score');
let message = document.getElementById('message');

let reset = document.getElementById('reset');

let turn = 1;

function test() {
    console.log('This test was successful');
}

const gameBoard = [
    {
        position: document.getElementById('top-left'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('top-middle'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('top-right'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('left'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('middle'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('right'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('bottom-left'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('bottom-middle'),
        available: true,
        value: ' '
    },
    {
        position: document.getElementById('bottom-right'),
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

const player = [createPlayer('x'), createPlayer('o')];

function gameWin() {
    if (turn % 2 !== 0) {
        player[0].addScore();
        xScore.innerText = player[0].getScore();
        message.innerText = 'Player One wins! Click reset to start a new game.';
    } else if (turn % 2 == 0) {
        player[1].addScore();
        oScore.innerText = player[1].getScore();
        message.innerText = 'Player Two wins! Click reset to start a new game.';
    }
}

function gameDraw() {
    message.innerText = 'This game ends in a draw. Click reset to start a new game.'
}

function playTurn() {
    const index = this.dataset.id;

    if (gameBoard[index].available == true) {
        if (turn % 2 !== 0) {
            this.innerHTML = 'X';
            gameBoard[index].available = false;
            gameBoard[index].value = 'X';
        } else {
            this.innerHTML = 'O';
            gameBoard[index].available = false;
            gameBoard[index].value = 'O';
        }

        const spaceValue = gameBoard.map(obj => obj.value);
        const availibility = gameBoard.map(obj => obj.available);

        const col1 = [spaceValue[0], spaceValue[3], spaceValue[6]];
        const col2 = [spaceValue[1], spaceValue[4], spaceValue[7]];
        const col3 = [spaceValue[2], spaceValue[5], spaceValue[8]];
        const row1 = [spaceValue[0], spaceValue[1], spaceValue[2]];
        const row2 = [spaceValue[3], spaceValue[4], spaceValue[5]];
        const row3 = [spaceValue[6], spaceValue[7], spaceValue[8]];
        const diag1 = [spaceValue[0], spaceValue[4], spaceValue[8]];
        const diag2 = [spaceValue[2], spaceValue[4], spaceValue[6]];

        if (col1.every(v => v === 'X') || col2.every(v => v === 'X') || col3.every(v => v === 'X') || row1.every(v => v === 'X') || row2.every(v => v === 'X') || row3.every(v => v === 'X') || diag1.every(v => v === 'X') || diag2.every(v => v === 'X') || col1.every(v => v === 'O') || col2.every(v => v === 'O') || col3.every(v => v === 'O') || row1.every(v => v === 'O') || row2.every(v => v === 'O') || row3.every(v => v === 'O') || diag1.every(v => v === 'O') || diag2.every(v => v === 'O')) {
            gameWin();
        } else if (availibility.every(v => v === false)) {
            gameDraw();
        }

        turn++;
    }
}

function gameState() {
    if(availibility.every(v => v === false)) {
        gameDraw();
    } else {
        playTurn();
    }
}

gameBoard[0].position.addEventListener('click', playTurn);
gameBoard[1].position.addEventListener('click', playTurn);
gameBoard[2].position.addEventListener('click', playTurn);
gameBoard[3].position.addEventListener('click', playTurn);
gameBoard[4].position.addEventListener('click', playTurn);
gameBoard[5].position.addEventListener('click', playTurn);
gameBoard[6].position.addEventListener('click', playTurn);
gameBoard[7].position.addEventListener('click', playTurn);
gameBoard[8].position.addEventListener('click', playTurn);