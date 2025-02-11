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
    const addScore = () => score++;
    const getScore = () => score;

    return {playerName, getScore, addScore};
}

const players = [createPlayer('pOne'), createPlayer('pTwo')]

const postions = gameBoard.map(obj => obj.position);
const availibility = gameBoard.map(obj => obj.available);