"use script";
// JAVASCRIPT LOGICAL QUESTIONS
// 1.Write a JavaScript program to check if a number is positive, negative, or zero.
let sums = 3;
if (sums > 0) {
  console.log("It is a Positive");
} else if (sums === 0) {
  console.log("It is a Zero");
} else {
  console.log("It is Negative");
}

// 2.Create a function that takes two numbers as arguments and returns their sum.
function add(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(add(5, 2));

// 3.Write a program to find the maximum of two given numbers.
numbers = [1, 3, 12, 18, 56];
let largest = numbers[0];
let lowest = numbers[0];
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}
console.log(largest);
console.log(lowest);

// 4.Create a function that takes a string as input and returns its length.
let nameOne = "elephant";
let nameTwo = "dog";
let nameThree = "bee";
console.log(nameOne.length);
console.log(nameTwo.length);
console.log(nameThree.length);

// 5.Write a JavaScript function to check if a given number is prime or not.
// let num = 12
// let isprime = num ==1? false:true;
// for (let i=2; i<num; i++){
//   num % i=0? isprime*=false; isprime*=true};
//   alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);

// 6.Write a function to sort given array.
let animals = ["elephant, deer, tiger, lion"];
let animal = animals.sort();
console.log(animal);

// 7.Write a function that checks if a given string, is a palindrome.
let str = "malayalam";
let word = str.split("");
let join = word.join("");
if (str == join) {
  console.log("It is a palindrome");
} else {
  console.log("It is a not palindrome");
}

// 8.Create a program that generates a random number between 1 and 10 and asks the user to guess it.
function guessNumber(){
  const random = Math.floor(Math.random() * 10)+1;
  let number = parseInt(prompt("Guess a number from 1 to 10: "));
  while(number !== random){
    number = parseInt(prompt("Guess a number from 1 to 10: "));
  }
  if(number == random){
  console.log("Yes it is correct!");
  }
}
guessNumber()
// 9. Create a program that generates a random password with a mixture of characters and symbols.
const down = document.getElementById("password");
function gfg_Run() {
  down.innerHTML = Math.random().toString(25).slice(2);
}

// 10.Create a program that determines if a given year is a leap year or not.
let leapYear = 1998;
if ((1998 % 4 == 0 && 1998 % 100 != 0) || 1998 % 400 == 0) {
  console.log("It is Leap Year");
} else {
  console.log("It is not Leap Year");
}
