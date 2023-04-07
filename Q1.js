// Accept two numbers in two prompts
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert the input strings to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Check which number is greater and display it in the console
if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is greater than ${num1}`);
} else {
  console.log("The two numbers are equal");
}
