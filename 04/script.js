// How to accept user input.

// 01. Easy Way (window prompt)

// let username = window.prompt("What is your username?");
// console.log(username);

// 02. Professional Way - HTML textbox

let username;

// document.getElementById("submit-btn").onclick = function () {
//   username = document.getElementById("user").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// };

document.getElementById("submit-btn").onclick = function () {
  username = document.getElementById("user").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
};
