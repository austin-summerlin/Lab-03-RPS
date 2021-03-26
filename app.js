// import functions and grab DOM elements
import { didUserWin } from './utils.js';
import { getRandomThrow } from './getRandomThrow.js';

const buttonEl = document.getElementById('throw');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const tiesEl = document.getElementById('ties');
const totalEl = document.getElementById('total');
const resetButton = document.getElementById('reset-button');

let wins = 0;
let losses = 0;
let total = 0;
let ties = 0;

buttonEl.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
    const radioButtonSelecter = document.querySelector('input:checked');
    console.log(radioButtonSelecter);
    const userChoice = radioButtonSelecter.value;

    const compareThrows = didUserWin(userChoice, computerChoice);
});


// winsEl.textContent = wins;
// lossesEl.textContent = total - wins;

// totalEl.textContent = wins + losses + ties;