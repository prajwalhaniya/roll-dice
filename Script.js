//taking all images in an array
dice_array = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

const startingSecond = 5;
let time = startingSecond;
const countDown = document.getElementById("SecondsCounter");
const score = document.getElementById("scoreValue");
const numberButtons = document.querySelectorAll("[data-number]");
const userSelectedNumber = document.getElementById("userSelectedValue");
var count = 0;
let success = "";

function rollDice() {
  numberButtons.forEach((button) => {
    button.style.background = "white";
    button.style.pointerEvents = "all";
  });

  randomNumber = Math.floor(Math.random() * dice_array.length);
  let selectedNumber = dice_array[randomNumber];
  document.getElementById("dice-image").src = `./Assets/${selectedNumber}`;

  if (userSelectedNumber.innerText == randomNumber + 1) {
    count++;
    score.innerHTML = count;
    value = "Your guess was right!";
  } else {
    value = "Your guess was wrong!";
  }

  //  document.getElementById('result').innerHTML = success;
  setResult(value);
}
//   setInterval(rollDice, 6000);

function updateSeconds() {
  let seconds = time;
  countDown.innerHTML = `${seconds}`;
  time--;

  if (time < 0) {
    rollDice();
    time = 5;
  }
  if (time == 2) {
    setResult("");
  }
}
setInterval(updateSeconds, 1000);

//number input
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    userSelectedNumber.innerHTML = button.innerText;
    button.style.background = "#3498db";
    numberButtons.forEach((item) => {
      item.style.pointerEvents = "none";
    });
  });
});

setTimeout(function () {
  document.getElementById("preloader").style.display = "none";
}, 6000);

function setResult(result) {
  document.getElementById("result").innerHTML = result;
}
