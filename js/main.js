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
const nameDisplay = document.querySelector('.name')
const currrentRollDisplay = document.querySelector('.current-roll')
const scoreDisplay = document.querySelector('.score')
const livesDisplay = document.querySelector('.lives')
const hogerButton = document.querySelector('.hoger')
const lagerButton = document.querySelector('.lager')

// Variabelen initialiseren
let currentRoll = diceRoll()
let score = 0;
let lives = 5;
let currentIndex = Math.floor(Math.random() * 6) + 1;

//????
let bestScore = localStorage.getItem('bestScore') || 0;

// Toon de beginrol en levens
currrentRollDisplay.textContact = currentRoll;
scoreDisplay.textContent = score;
livesDisplay.textContent = lives;

// Vragen over jouw naam
const result = prompt('Wat is je naam?');
if(result){
    nameDisplay.innerText = result;
}

// Gooi de dobbelsteen (geeft een getal tussen 1 en 6)
function diceRoll(){
    let currentIndex = Math.floor(Math.random() * 6) + 1;
    return currentIndex;
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
    
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;

    // Controleer of het spel afgelopen is of wint
    if (lives <= 0) {
    gameOver();
    } else if (score >= 3){
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

const images = [
    {
        diceValue: 1,
        src: "img/one.png"
    },
    {
        diceValue: 2,
        src: "img/two.png"
    },
    {
        diceValue: 3,
        src: "img/three.png"
    },
    {
        diceValue: 4,
        src: "img/four.png"
    },
    {
        diceValue: 5,
        src: "img/five.png"
    },
    {
        diceValue: 6,
        src: "img/six.png"
    }
];

// let currentIndex = Math.floor(Math.random() * images.length) + 1;

function changeImage() {
    const imageClass = document.querySelector('.dice1');

    imageClass.src = 'img/one.png'

    currentIndex = Math.floor(Math.random() * 6) + 1;

    for(let i = 0; i < images.length; i++){
        // console.log(images[i])
        if(currentIndex == images[i].diceValue){
           console.log(images[i].diceValue);
           currrentRollDisplay.textContent = currentIndex; 
           imageClass.src = images[i].src;
        } else {
            // console.log('image is er niet')
        }
    }

    
}

window.onload = changeImage();