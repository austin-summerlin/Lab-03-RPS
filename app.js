// import functions and grab DOM elements
import { didUserWin } from './utils.js';
import { getRandomThrow } from './getRandomThrow.js';

const buttonEl = document.getElementById('throw');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const tiesEl = document.getElementById('ties');
const totalEl = document.getElementById('total');

let wins = 0;
let losses = 0;
let total = 0;
let ties = 0;

buttonEl.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
    const radioButtonSelecter = document.querySelector('input:checked');
    console.log(radioButtonSelecter);
    const userChoice = radioButtonSelecter.value;
    total++;
    totalEl.textContent = total;

    const compareThrows = didUserWin(userChoice, computerChoice);

    if (compareThrows === 'win') {
        wins++;
        winsEl.textContent = wins;
        whoWonEl.textContent = 'You Won!';
    }

    if (compareThrows === 'lose') {
        losses++;
        lossesEl.textContent = losses;
        whoWonEl.textContent = 'You Lost!';
    }

    if (compareThrows === 'tie') {
        ties++;
        tiesEl.textContent = ties;
        whoWonEl.textContent = 'You Tied!';
    }
});



