let a = prompt("Enter your Marks of 1st Student");
let b = prompt("Enter your Marks of 2nd Student");
let c = prompt("Enter your Marks of 3rd Student");
let d = prompt("Enter your Marks of 4th Student");
let e = prompt("Enter your Marks of 5th Student");
let avg = (a + b + c + d + e) / 5;
if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70 || avg >= 60) {
  console.log("Grade : D");
} else if (avg < 80 || avg >= 70) {
  console.log("Grade : C");
} else if (avg < 90 || avg >= 80) {
  console.log("Grade : B");
} else if (avg < 100 || avg >= 90) {
  console.log("Grade : A");
}
