import checkNumbers from './randomizer.js';
// EVERYTHING YOU NEED TO "CHANGE" (STATE)
const userInput = document.getElementById('enter-guess');
const checkButton = document.getElementById('submit-guess');
const tempContainer = document.getElementById('temp-container');
const resultContainer = document.getElementById('result-container');
const tempDisplay = document.getElementById('temp-display');
const resultDisplay = document.getElementById('result-display');
const triesDisplay = document.getElementById('tries');
// RULES TO CHANGE THE VALUE OF STATE

let tries = 4;
let correctNumber = Math.floor(Math.random() * 20);
// if (correctNumber > 20 || correctNumber < 0) return "error";


// THIS CHANGES THE STATE

checkButton.addEventListener('click', () => {
    tries--;
    triesDisplay.textContent = tries;
    console.log('OOOOOOKAAAAYY', Number(userInput.value));
    if (checkNumbers(Number(userInput.value), correctNumber) === -1) {
        tempDisplay.textContent = 'too low';
        tempContainer.classList.remove('hidden');
    }
    if (checkNumbers(Number(userInput.value), correctNumber) === 1) {
        tempDisplay.textContent = 'too high';
        tempContainer.classList.remove('hidden');
    }
    if (checkNumbers(Number(userInput.value), correctNumber) === 0) {
        tempDisplay.textContent = 'correct';
        tempContainer.classList.remove('hidden');
        resultContainer.classList.remove('hidden');
        checkButton.disabled = true;
    }
    if (tries === 0 && checkNumbers(Number(userInput.value), correctNumber) !== 0) {
        checkButton.disabled = true;
        resultContainer.classList.remove('hidden');
        resultDisplay.textContent = 'lost';
    }
    if (checkNumbers(Number(userInput.value), correctNumber) === 2) {
        tempDisplay.textContent = 'too high';
        tempContainer.classList.remove('hidden');
    }
});