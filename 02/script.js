// Variable - A container that stores a value.
//            Behaves as if it were the value that it contains.

// declaration - let age;
// assignment = age = 25;

// So,
// let n;
// n = 10;

// or
// let u = 12;

let age = 25;
let price = 10.49;
let gpa = 3.2;

console.log(`You are ${age} years old.`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

// To know the data-type of a variable.

console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);

let firstName = "Rahul";
let favoriteFood = "Biryani";
let email = "rahul@gmail.com";

console.log(`Your name is: ${firstName}`);
console.log(`Your favorite food is: ${favoriteFood}`);
console.log(`Your email address: ${email}`);

console.log(typeof firstName, typeof favoriteFood, typeof email);

let online = true;
let forSale = false;
let isStudent = true;

console.log(`Rahul is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

console.log(typeof online, typeof forSale, typeof isStudent);

// ---------------------------

let fullName = "Rahul Singh";
let userAge = 25;
let isUserStudent = false;

document.getElementById("name").textContent = `Your name is: ${fullName}`;
document.getElementById("userAge").textContent = `Your age is: ${userAge}`;
document.getElementById(
  "isUserStudent"
).textContent = `Enrolled: ${isUserStudent}`;
