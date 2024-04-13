// RANDOM NUMBER GENERATOR !!

// let randomNumber = Math.random();
// console.log(randomNumber);

// CREATE A DICE

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// GENERATE A RANDOM NUMBER BETWEEN 50 & 100.

// const min = 50;
// const max = 100;

// let randomNumber = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNumber);

// ------------------------------ //

const btn = document.getElementById("mybtn");
const dice = document.getElementById("dice");
let randomNumber;
btn.onclick = function () {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = randomNumber;
};
