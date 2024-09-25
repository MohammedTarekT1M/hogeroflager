const newPage = new URLSearchParams(window.location.search);
const score = newPage.get('score');
const bestScore = newPage.get('bestScore');

document.querySelector(".final-score").textContent = score;
document.querySelector(".best-score").textContent = bestScore;
