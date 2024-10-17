// Selecteer elementen 
const nameDisplay = document.querySelector('.name')
const currentRollDisplay = document.querySelector('.current-roll')
const scoreDisplay = document.querySelector('.score')
const livesDisplay = document.querySelector('.lives')
const hogerButton = document.querySelector('.hoger')
const lagerButton = document.querySelector('.lager')
const myRoll = document.querySelector('.your-roll');

// Variabelen initialiseren
let currentRoll = diceRoll()
let score = 0;
let lives = 5;
let currentIndex = Math.floor(Math.random() * 6) + 1;

// Bewaart de data van bestscore
let bestScore = localStorage.getItem('bestScore') || 0;

// Toon de beginrol en levens
currentRollDisplay.textContent = currentRoll;
scoreDisplay.textContent = score;
livesDisplay.textContent = lives;

// Vragen over jouw naam
const result = prompt('Wat is je naam?');
if(result){
    nameDisplay.innerText = result;
}

// Gooi de dobbelsteen (geeft een getal tussen 1 en 6)
function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}


// Controleer de gok van de speler
function checkGuess(guess) {
    const newRoll = diceRoll();
    const myNewRoll = diceRoll();
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
    myRoll.textContent = myNewRoll;

    // Controleer of het spel afgelopen is of wint
    if (lives <= 0) {
    gameOver();
    } else if (score >= 5){
        youWin();
    }
}

// Game over function
function gameOver(){
    if (score > bestScore) {
    bestScore = score;
    localStorage.setItem('bestScore', bestScore);
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

// Array voor img
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

function changeImage() {
    const imageClass = document.querySelector('.dice1');
    currentIndex = Math.floor(Math.random() * 6) + 1;

    for(let i = 0; i < images.length; i++){
        console.log(images[i])
        if(currentIndex === images[i].diceValue){
           console.log(images[i].diceValue);
           currentRollDisplay.textContent = currentIndex; 
           imageClass.src = images[i].src;
        }
    }

    
}

window.onload = changeImage;