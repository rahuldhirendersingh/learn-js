// const - a type of variable that cannot be changed.

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log(circumference);

document.getElementById("sub-btn").onclick = function () {
  radius = document.getElementById("userInput").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById(
    "myH3"
  ).textContent = `Circumference of the circle is: ${circumference + "cm"}`;
};
