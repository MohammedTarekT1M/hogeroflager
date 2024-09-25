// let startPoint=('5');
// // je krijgt 1 punt per keer dat je goed raad
// let puntenGain=('+1');
// const maxPunten = ('15');
// // je verliest 1 punt per keer dat je slecht raad
// let puntenVerlies=('-1')
// // elke keer dat je de button pressed gaat die rollen
// let buttonPress=('roll')
// // druk op start button om de spel te beginnen 
// let startButtob=('start')
// // je hebt een sound button die aan en uit kan
// let volumeButton=('on/off')
// // als je op hoger button drukt
// let heigherButton = ('hoger')
// // als je op lager button drukt
// let lowerButton = ('lager')
// // als je op dobbelsteen drukt
// let diceOne = ('dobbelSteen')
// // als je op restart button drukt
// const restartButton = ('restart')
// // als je op home button drukt
// const homeButton = ('homeButton')
// // hier zie je je best score
// let score=('score') 
// Math.random()

const currrentRollDisplay = document.querySelector('.current-roll')
const scoreDisplay = document.querySelector('.score')
const livesDisplay = document.querySelector('.lives')
const hogerButton = document.querySelector('.hoger')
const lagerButton = document.querySelector('.lager')

let currentRoll = diceRoll()
let score = 0 
let lives = 5
let bestScore = document.querySelector('bestScore') || 0;

currrentRollDisplay.textContact = currentRoll;
scoreDisplay.textContent = score;
livesDisplay.textContent = lives;

function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}
console.log(Math.floor(Math.random() *6) + 1);


function checkGuess(guess) {
    const newRoll = diceRoll();
    let correct = false;

    if (guess === "hoger" && newRoll > currentRoll) {
        correct = true;
    } else if (guess === "lager" && newRoll < currentRoll) {
        correct = true;
    }

    if (correct) {
        score++;
    } else {
        // score = 0;
        lives--;
    }

    currentRoll = newRoll;
    currrentRollDisplay.textContent = currentRoll;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
}

hogerButton.addEventListener('click', function(){
    checkGuess("hoger");
});

lagerButton.addEventListener('click', function(){
    checkGuess("lager");
})

if (lives === 0) {
    gameOver();
}
function gameOver(){
    alert("Game Over");
    if (score > bestScore) {
    bestScore = score;
    localStorage.getItem('bestScore', bestScore);
}
}

