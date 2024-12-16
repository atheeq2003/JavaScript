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
console.log("Definition of a: ",a);
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
    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < vowelsArr.length; j++) {
            if(string[i] === vowelsArr[j]) {
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
const countVowelsTwo = (str) => {
    let count = 0;
    for(let vowels of str) {
        if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
            count++;
        }
    }
    return count;
}
let numOfVowelsTwo = countVowelsTwo("peterparker");
console.log("Num of Vowels in the string using arrow function: ", numOfVowelsTwo);