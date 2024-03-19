//VARIABLES
let playerName1 = document.getElementById("player-name1");
let playerName2 = document.getElementById("player-name2");
playerName1.innerHTML = prompt("playerName1");
playerName2.innerHTML = prompt("playerName2");
let numberAdded1 = document.querySelector(".number-generated1");
let numberAdded2 = document.querySelector(".number-generated2");
let scoreText1 = document.getElementById("score-player1");
let scoreText2 = document.getElementById("score-player2");
let moodEmojiText1 = document.querySelector(".mood1");
let moodEmojiText2 = document.querySelector(".mood2");
let cube = document.querySelector(".cube-animate");
let score = 0;
let gameWinner = document.querySelector(".winner");
let main = document.querySelector(".main");
randomSides = [
  "side-of-1",
  "side-of-2",
  "side-of-3",
  "side-of-4",
  "side-of-5",
  "side-of-6",
];
let emojis = [
  "ooh😫",
  "Gosh😪",
  "no bad😒",
  "let's go🤔",
  "nice😋",
  "perfect🥰",
];
const btnPlayer1 = document.getElementById("button-player1");
const btnPlayer2 = document.getElementById("button-player2");
let playerSquare1 = document.querySelector(".player1");
let playerSquare2 = document.querySelector(".player2");
//function of btn Hit
function btnHit(numberAdded, scoreText, mood, player) {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  score = randomNumber;
  numberAdded.innerHTML = "+" + String(randomNumber);
  numberAdded.classList.add("updated-added-number");
  scoreText.innerHTML = Number(scoreText.innerHTML) + score;
  mood.innerHTML = emojis[randomNumber - 1];
  cube.classList.remove("cube-animate");
  cube.classList.add(randomSides[Number(randomNumber) - 1]);
  btnPlayer1.style.pointerEvents = "none";
  btnPlayer2.style.pointerEvents = "all";
}
function Winner(playerName) {
  gameWinner.innerText = `${playerName.innerHTML}_ WINS !🎉`;
  gameWinner.classList.add("winner-message");
  document.body.style.background =
    "linear-gradient(90deg,rgb(213, 117, 117), rgb(245, 233, 233))";
}
//btn player1 Event Listener
btnPlayer1.addEventListener("click", function () {
  if (scoreText1.innerHTML >= 30) {
    Winner(playerName1);
    playerSquare1.innerHTML = "🥰";
    playerSquare2.innerHTML = "😭";
    playerSquare1.classList.remove("player1");
    playerSquare2.classList.remove("player2");
    playerSquare1.classList.add("playerWinning");
    playerSquare2.classList.add("playerFailling");
  } else {
    btnHit(numberAdded1, scoreText1, moodEmojiText1, playerName1);
    btnPlayer1.style.pointerEvents = "none";
    btnPlayer2.style.pointerEvents = "all";
  }
});
// btn player2 Event listener
btnPlayer2.addEventListener("click", function () {
  if (Number(scoreText2.innerHTML) >= 30) {
    Winner(playerName2);
    playerSquare1.innerHTML = "😭";
    playerSquare2.innerHTML = "🥰";
    playerSquare1.classList.remove("player1");
    playerSquare2.classList.remove("player2");
    playerSquare1.classList.add("playerWinning");
    playerSquare2.classList.add("playerFailling");
  } else {
    btnHit(numberAdded2, scoreText2, moodEmojiText2, playerName2);
    btnPlayer2.style.pointerEvents = "none";
    btnPlayer1.style.pointerEvents = "all";
  }
});
