let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));
let num4 = Number(prompt("Enter the fourth number:"));
let num5 = Number(prompt("Enter the fifth number:"));

let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
}

console.log("The largest number is " + largest);
