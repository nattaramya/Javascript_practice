// script.js
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const gameArea = document.getElementById("gameArea");

let score = 0;
let timeLeft = 30;
let timer;

function moveBox() {
  const maxX = gameArea.clientWidth - box.clientWidth;
  const maxY = gameArea.clientHeight - box.clientHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}

box.addEventListener("click", () => {
  if (timeLeft > 0) {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
  }
});

function updateTime() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(timer);
    alert(`Game over! Your final score is ${score}`);
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  moveBox();
  timer = setInterval(updateTime, 1000);
}

window.onload = startGame;
