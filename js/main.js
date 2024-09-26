// let startPoint=('5');
// // je krijgt 1 punt per keer dat je goed raad
// let puntenGain=('+1');
// const maxPunten = ('10');
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

// Selecteer elementen 
const currrentRollDisplay = document.querySelector('.current-roll')
const scoreDisplay = document.querySelector('.score')
const livesDisplay = document.querySelector('.lives')
const hogerButton = document.querySelector('.hoger')
const lagerButton = document.querySelector('.lager')

// const images = [
//     {
//         src: "one.png"
//     },
//     {
//         src: "two.png"
//     },
//     {
//         src: "three.png"
//     },
//     {
//         src: "four.png"
//     },
//     {
//         src: "five.png"
//     },
//     {
//         src: "six.png"
//     }
// ];


// Variabelen initialiseren
let currentRoll = diceRoll()
let score = 0;
let lives = 5;

//????
let bestScore = localStorage.getItem('bestScore') || 0;

// Toon de beginrol en levens
currrentRollDisplay.textContact = currentRoll;
scoreDisplay.textContent = score;
livesDisplay.textContent = lives;

// Gooi de dobbelsteen (geeft een getal tussen 1 en 6)
function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}

//console.log(Math.floor(Math.random() *6) + 1);

// Controleer de gok van de speler
function checkGuess(guess) {
    const newRoll = diceRoll();
    let correct = false;
// 
    if (guess === "hoger" && newRoll > currentRoll) {
        correct = true;
    } else if (guess === "lager" && newRoll < currentRoll) {
        correct = true;
    }
//
    if (correct) {
        score++;
    } else {
        lives--;
    }

    // Update de huidige rol, score en levens 
    currentRoll = newRoll;
    currrentRollDisplay.textContent = currentRoll;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;

    // Controleer of het spel afgelopen is of wint
    if (lives <= 0) {
    gameOver();
    } else if (score >= 10){
        youWin();
    }
}

// Game over function
function gameOver(){
    if (score > bestScore) {
    bestScore = score;
    localStorage.getItem('bestScore', bestScore);
}
//Doorverwijzen naar de game over-pagina
    window.location.href = `gameover.html?score=${score}&bestScore=${bestScore}`;
}

// Win function
function youWin(){
    if (score > bestScore){
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }
    // Doorverwijzen naar de win pagina
    window.location.href = `win.html?score=${score}&bestScore=${bestScore}`;
}

// EventListener voor knoppen
hogerButton.addEventListener('click', function(){
    checkGuess("hoger");
});

lagerButton.addEventListener('click', function(){
    checkGuess("lager");
});

// let currentIndex = 0;

// const randomIndex = Math.floor(Math.random() * images.length)

// function changeImage() {
//     const imageClass = document.querySelector('.image');

//     imageClass.src = images[currentIndex].src;

//     currentIndex++;

//     if(currentIndex >= images.length){
//         currentIndex = 0
//     }
// }

// window.onload = changeImage;