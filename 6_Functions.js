// Function Definition
function printStmnt() {
  console.log("log through printStmnt Method: ");
  console.log("Javascript....");
}
// 1st Function call
printStmnt();
// 2nd Function call
printStmnt();

// Passing Parameters
function myFunction(string, n) {
  console.log("myFunction logging using parameters: ", string + n);
}
// Passing Arguments
myFunction("Spider Man ", 21);
let str = "Batman ";
myFunction(str, 27);

// Functions returning values
function sumTwoNums(a, b) {
  let sum = a + b;
  return sum;
}
// storing the returned value by function into a variable and then loggin the stored variable
let ans = sumTwoNums(2, 5);
console.log(`Sum of two numbers: ${ans}`);
// Directly logging the function returning value
console.log(`Sum of two numbers: ${sumTwoNums(2, 5)}`);

// Arrow Functions -> Provides definition of a function and also is a function. Basically you can make any variable to a function by this
// Used for smaller tasks
// arrowMul is a function variable.
let arrowMul = (a, b) => {
  console.log(`Multiplication of Two Nums ${a} * ${b} :  ${a * b}`);
};
// Definition is just like a=5;
let a = 5;
console.log("Definition of a: ", a);
console.log("Definition of ArrowMul arrowFunction: ", arrowMul);
arrowMul(6, 5);
// You can also assign normal values to the arrowMul variable. But to do this it must be let not const
arrowMul = 10;
console.log("Updated value of arrowMul: ", arrowMul);
// But after you do this the function call wont work as it has change to a normal variable now from function variable.
// arrowMul(9, 5); throws error -> arrowMul is not a function

// Practice - 1
function countVowels(string) {
  let count = 0;
  let vowelsArr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowelsArr.length; j++) {
      if (string[i] === vowelsArr[j]) {
        count++;
        continue;
      }
    }
  }
  return count;
}

let numOfVowels = countVowels("atheeq");

console.log("Num of Vowels in the string: ", numOfVowels);

// Practice - 2
export const countVowelsTwo = (str) => {
  let count = 0;
  for (let vowels of str) {
    if (
      vowels === "a" ||
      vowels === "e" ||
      vowels === "i" ||
      vowels === "o" ||
      vowels === "u"
    ) {
      count++;
    }
  }
  return count;
};
let numOfVowelsTwo = countVowelsTwo("peterparker");
console.log(
  "Num of Vowels in the string using arrow function: ",
  numOfVowelsTwo
);

// In javascirpt functions can be passed as arguments to another function -> this is called callback function
// For each loop
// Whenever a function is associated with a datastructure or object it becomes a method Ex: str.toUpperCase()
// So For Each is a method associated with arrays.
let arr = [1, 3, 4, 6, 7];
arr.forEach(function myFunction(val) {
  // Here val is value at each index
  console.log("First Method: ", val);
});

// We dont need to execute callback function we just have to provide the definition of the call back function for the forEach loop
// and it executes automatically
// We usually write forEach using arrow functions
arr.forEach((val) => {
  console.log("Second Method: ", val);
});

// We can pass three parameters in the callback function (value, index, array itself)
arr.forEach((val, index, arr) => {
  console.log(val.toString(), index, arr);
});

// Higher Order Funcitons/Methods -> These take another functions as their parameter or return another function as their output
// Ex: forEach is higher order function

// Practice - 3
let arrNums = [2, 4, 6, 8, 10];
let ansArr = [];
arrNums.forEach((value) => {
  ansArr.push(value * value);
});
console.log(ansArr);

// Another way to write
let calcSqr = (val, index, arrNums) => {
  console.log(val ** 2, index, arrNums);
};
// calling calcSqr function inside forEach method. This reduces time for writing a loop to iterate the whole array. And also creates a function.
arrNums.forEach(calcSqr);

// Some more array methods
// map ->  arr.map(value, index, arr) : Returns the result in a new array. no need to make a new array and push values to it.
let arrTwo = [1, 2, 3, 4, 5];
// just assigned it to new array variable and result is stored in the array -> adavantage of using map
let newArr = arrTwo.map((value) => {
  return value % 2 === 0 ? "true" : "false";
});
console.log(newArr);

// filter -> returns only the true values in an array. Returns them in a new array
let trueArr = arrTwo.filter((value) => {
  return value % 2 === 0;
});
console.log(trueArr);

// reduce -> When we want to return a single value of some operations we can use this. Ex: sum, compare
const sum = arrTwo.reduce((prev, next) => {
  // [1, 2, 3, 4, 5]
  return prev + next; //prev + next then store result in prev. move pointer to next element calculate sum and store in prev
});
console.log(sum);

// Practice - 4
let studMarks = [88, 98, 50, 90, 92, 89];
let marksNinety = studMarks.filter((value) => {
  return value > 90;
});
console.log(marksNinety);

// Practice - 5
let n = prompt("Enter a number: ");
let arr3 = [];
for(let i=1; i <= n; i++) {
  arr3[i-1] = i;
}
console.log(arr3);
const sumofArr3 = arr3.reduce((prev, next) => {
  return prev + next;
});
console.log("Sum of Array = ", sumofArr3);

const mulofArr3 = arr3.reduce((prev, next) => {
  return prev * next;
});
console.log("Multiplication of Array = ", mulofArr3);

