import isYes from './isYes.js';
const testButton = document.getElementById('testButton');
const total = document.getElementById('total');
testButton.addEventListener('click', () => {
    const name = prompt('What is your name?');
    const confirmation = confirm(`${name}, are you sure you want to take the quiz?`);
    if (confirmation === false) return;
    const answerOne = prompt('Do you have a Drivers License?');
    const answerTwo = prompt('are you also insured?');
    const answerThree = prompt('do you know how to properly use the passing lane?');
    let count = 0;
    if (isYes(answerOne)) count += 1;
    if (isYes(answerTwo)) count += 1;
    if (isYes(answerThree)) count += 1;
    console.log('im here at this step');
    total.textContent = `${name}, okay, James says you may drive because you got ${count} correct`;
    
});
