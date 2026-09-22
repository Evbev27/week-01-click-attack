let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");

// TODO: create addPoint()
function addPoint() {
    score++;
    updateDisplay();
}
// power attack
function powerAttack() {
    score = score+5;
    updateDisplay();
}
// TODO: create resetGame()
function resetGame() {
    score = 0;
    updateDisplay();
    title.innerText = ("Click Attack");
}
// updating the display
function updateDisplay() {
    scoreDisplay.innerText = score;
    if (score >= 20) {
    title.innerText = "YOU WIN!";
    }
}
// TODO: connect both functions to buttons (and power attack button)
attackButton.addEventListener("click", addPoint);
powerButton.addEventListener("click", powerAttack);
resetButton.addEventListener("click", resetGame);