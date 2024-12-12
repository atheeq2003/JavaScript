import { instaProfile } from "./1_Object.js"

// Sum of numbers from 1 to n
// For Loop
let n = 5;
let sum = 0; 
for(let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);

// While Loop
let i = 1;
while(i <= 5) {
    console.log("Javascript");
    i++;
}

// do while Loop
let count = 2;
do {
    console.log("Count: ", count);
    count++;
}
while(count < 4);

// for of loop (Used for iterating strings and arrays)
// No need of initializing val(Basically i).
let str1 = "Atheeq";
let size = 0;
console.log("str1 = ", str1);
for(let val of str1) {
    console.log("Val: ", val);
    size++;
}
console.log("Size of String1 = ",size);

// for in loop (Used for iterating objects -> Keys and values)
for(let key in instaProfile) {
    console.log(` Key   =  ${key} \n Value =  ${instaProfile[key]}`);
}

// Practice 1
// Print all even numbers from 0 to 100
console.log("Even Numbers from 0 to 100: ");
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// Practice 2 
// User Guessing Number
/*
let gameNumber = 45;
let guessNumber = prompt("Guess the Number: ");
console.log("guessedNumber: ", guessNumber);
do {
    guessNumber = prompt("Please Guess the Number again: ");
    console.log("guessedNumber: ", guessNumber);
}
// Not using !== because prompt always returns string, the number entered by user will be in string and when matching it will result to false;
while(guessNumber != gameNumber);
console.log("You Guessed the correct number!!");
*/