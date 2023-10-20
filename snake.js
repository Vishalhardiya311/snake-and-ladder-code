const board = document.getElementById('board');
const result = document.getElementById('result');
const cells = [];
let currentPlayer = 1;
let playerPosition = [1, 1];

// Create the game board dynamically
for (let row = 9; row >= 0; row--) {
    for (let col = 0; col < 10; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = row * 10 + col + 1;
        cells.push(cell);
        board.appendChild(cell);
    }
}

// Add snakes and ladders (customize as needed)
const snakesAndLadders = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78
};

function movePlayer(player, newPosition) {
    if (newPosition in snakesAndLadders) {
        newPosition = snakesAndLadders[newPosition];
        result.textContent = `Player ${player} got a snake/ladder! Moved to position ${newPosition}`;
    } else {
        result.textContent = `Player ${player} moved to position ${newPosition}`;
    }

    cells[playerPosition[player - 1] - 1].removeChild(player);
    cells[newPosition - 1].appendChild(player);
    playerPosition[player - 1] = newPosition;
}

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    movePlayer(currentPlayer, playerPosition[currentPlayer - 1] + diceRoll);
    if (playerPosition[currentPlayer - 1] >= 100) {
        result.textContent = `Player ${currentPlayer} wins!`;
        document.querySelector('button').setAttribute('disabled', 'true');
    } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
}

// Initialize the players on the board
const player1 = document.createElement('div');
player1.classList.add('player');
cells[0].appendChild(player1);

const player2 = document.createElement('div');
player2.classList.add('player');
cells[0].appendChild(player2);

rollDice(); // Start the game
