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

const currrentRoll = document.querySelector('.current-roll')
const scoreDisplay = document.querySelector('.score')
const hogerButton = document.querySelector('.hoger')
const lagerButton = document.querySelector('.lager')

let currentRoll = diceRoll()
let score = 0 