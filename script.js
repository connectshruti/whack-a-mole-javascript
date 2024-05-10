let score;
const holes = document.querySelectorAll(".hole");
const scoreId = document.querySelector("#score");

let lastHole;
const randomHoles = () => {
  const idx = Math.floor(Math.random() * 9) + 1;
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHoles();
  }
  lastHole = hole;
  return hole;
};
const randomTime = () => {
  const min = 200;
  const max = 800;
  return Math.floor(Math.random() * (max - min) + min);
};
const peek = (hole, time) => {
  hole.classList.add("active");
  setTimeout(() => {
    hole.classList.remove("active");
  }, time);
};
const startGame = () => {
  console.log("GAME STARTED");
  score = 0;
  let time = randomTime();
  let myInterval = setInterval(() => {
    let hole = randomHoles();
    peek(hole, time);
    scoreId.innerText = score;
  }, time);

  setTimeout(() => {
    clearInterval(myInterval);
  }, 10000);
};
startGame();
const playAgain = () => {
  startGame();
};
const increaseScore = () => {
  score++;
};
