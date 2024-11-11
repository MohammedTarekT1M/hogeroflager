// Selecteer elementen
const nameDisplay = document.querySelector('.name');
const currentRollDisplay = document.querySelector('.current-roll');
const scoreDisplay = document.querySelector('.score');
const livesDisplay = document.querySelector('.lives');
const hogerButton = document.querySelector('.hoger');
const lagerButton = document.querySelector('.lager');
const myRoll = document.querySelector('.your-roll');
const goButton = document.querySelector('.go');

// Variabelen initialiseren
let currentRoll = diceRoll();
let score = 0;
let lives = 5;
let gameStarted = false;

// Bewaart de data van bestscore
let bestScore = localStorage.getItem('bestScore') || 0;

// Toon de beginrol en levens
currentRollDisplay.textContent = currentRoll;
scoreDisplay.textContent = score;
livesDisplay.textContent = lives;

// Vragen over jouw naam
const result = prompt('Wat is je naam?', 'Speler');
if (result) {
    nameDisplay.innerText = result;
}

// Gooi de dobbelsteen (geeft een getal tussen 1 en 6)
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

// Start het spel door op de knop "Go" te klikken
goButton.addEventListener('click', function () {
    if (!gameStarted) {
        currentRoll = diceRoll();
        currentRollDisplay.textContent = currentRoll;
        myRoll.textContent = 'Wat Denk Je, Hoger of Lager??';
        changeImage(currentRoll);
        gameStarted = true;
    }
});

// Controleer de gok van de speler
function checkGuess(guess) {
    if (!gameStarted) return;

    const myNewRoll = diceRoll();
    let correct = false;

    // Controleer of de gok juist is
    if ((guess === "hoger" && myNewRoll > currentRoll) || (guess === "lager" && myNewRoll < currentRoll)) {
        correct = true;
    }

    // Update de score of levens op basis van de gok
    if (correct) {
        score++;
    } else {
        lives--;
    }

    // Update de score en de weergave van levens
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
    myRoll.textContent = myNewRoll;

    // Update dobbelsteenafbeelding op basis van de nieuwe roll
    changeImage(myNewRoll);

    // Controleer of het spel afgelopen of gewonnen is
    if (lives <= 0) {
        gameOver();
    } else if (score >= 5) {
        youWin();
    } else {
        gameStarted = false;
        currentRoll = myNewRoll;
    }
}


// Game over function
function gameOver() {
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }
    window.location.href = `gameover.html?score=${score}&bestScore=${bestScore}`;
}

// Win function
function youWin() {
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }
    window.location.href = `win.html?score=${score}&bestScore=${bestScore}`;
}

// EventListener voor knoppen
hogerButton.addEventListener('click', function () {
    checkGuess("hoger");
});

lagerButton.addEventListener('click', function () {
    checkGuess("lager");
});

// Array voor img
const images = [
    { diceValue: 1, src: "img/one.png" },
    { diceValue: 2, src: "img/two.png" },
    { diceValue: 3, src: "img/three.png" },
    { diceValue: 4, src: "img/four.png" },
    { diceValue: 5, src: "img/five.png" },
    { diceValue: 6, src: "img/six.png" }
];

function changeImage(diceValue) {
    const imageClass = document.querySelector('.dice1');

    for (let i = 0; i < images.length; i++) {
        if (diceValue === images[i].diceValue) {
            imageClass.src = images[i].src;
        }
    }
}

// Reset de startstatus van het spel en de afbeelding wanneer de pagina wordt geladen
window.onload = function() {
    changeImage(currentRoll);
};
