const p1Butoon = document.querySelector('#p1Button');
const p2Butoon = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1');
const p2Display = document.querySelector('#p2');
const playToselect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
p1Butoon.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Butoon.disabled = true;
            p2Butoon.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Butoon.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p2Butoon.disabled = true;
            p1Butoon.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})
playToselect.addEventListener('change', function () {
    winningScore = parseInt(this.value);

})
resetButton.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Butoon.disabled = false;
    p2Butoon.disabled = false;
}