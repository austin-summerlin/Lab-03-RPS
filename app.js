// import functions and grab DOM elements
import { getCompRockPaperScissors } from './utils.js';

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
let rps = Math.ceil(Math.random() * 3);

buttonEl.addEventListener('click', () => {
    const compThrow = getCompRockPaperScissors(rps);

    const currenttlySelectedRadioButton = document.querySelector('input:checked');
    const userThrow = currenttlySelectedRadioButton.value;

    if (compThrow === userThrow) {
        ties++;
        tiesEl.textContent = ties;
        whoWonEl.textContent = 'You Tied';
    }

    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;

    totalEl.textContent = wins + losses + ties;

});