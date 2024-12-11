import { instaProfile } from './1_Object.js';
let a = 5, b = 3;
let c = "5";
let d = 7;
console.log(typeof(a),"a = ",a);
console.log(typeof(b),"b = ",b);
console.log(typeof(c),"c = ",c);
console.log(typeof(d),"d = ",d);

// Operations usign Operands
console.log("a + b = ", a + b);
console.log("a * b = ", a * b);
// Exponent operator -> 5^3
console.log("a ** b = ", a ** b);

// If double equal to is used then the type is ignored
console.log("a == c: (Without Type Comparison) ", a == c);
// Use triple equal to for type and value comparison
console.log("a === c: (With Type Comparison)", a === c);
console.log("a != c: (Without Type Comparison)", a != c);
// Here double equal to
console.log("a !== c: (With Type Comparison)", a !== c);
console.log("a < c: ", a <= c);
console.log("a > b: ", a > b);

// Increment and Decrement
// Post Increment
// Logs value first and then increments
console.log("a = (Prints a and then increments and stores in memory)", a++);
console.log("a = ", a);

// Increments first and then prints the value
console.log("b = ", ++b);

// Logical Operators
console.log("a > b(true) && d > b(true)", a > b && d > b);
console.log("a < b(false) && d > b(true)", a < b && d > b);
console.log("a < b(false) || d > b(true)", a < b || d > b);
console.log("!(a < b(false) || d > b(true))", !(a < b || d > b));

// Conditional Statements

let mode = "Dark";
let color;

if(mode === "Dark") {
    color = "Black"
} 
else if(mode == "Blue") {
    color = "Blue";
}
else {
    color = "White";
}

console.log("Color: ", color);

if(mode === "Dark") console.log("Mode: ",mode);

// Ternary Operator

/* 
   Used type = module in the script tag of my index.html. This enables us to import and export objects, classes, functions etc., 
    <script type = "module" src = "first.js"></script>
    <script type = "module" src = "second.js"></script>
   If type module is not used then you cannot import/export.
*/
console.log("No of Followers: ", instaProfile.no_Of_Followers, "Following: ", instaProfile.following);
let result = instaProfile.no_Of_Followers > instaProfile.following ? "Popular" : "Not so Popular";
console.log("Result: ", result);


// Practice - 1
let n = prompt("Enter a number to check if it is a multiple of 3: "); // Taking input from user
if(n % 3 === 0) {
    console.log(n, "is a multiple of 3");
}
else {
    console.log(n, "is not a multiple of 3");
}

// Practice - 2
let score = prompt("Enter the score: ");
let grade;
if(score >= 90 && score <= 100) {
    grade = "A";
}
else if(score < 90 && score >= 70) {
    grade = "B";
}
else if(score < 70 && score >= 60) {
    grade = "C";
}
else if(score < 60 && score >= 50) {
    grade = "D";
}
else if(score < 50 && score >= 0){
    grade = "F";
}
else {
    grade = "Invalid Score";
}

console.log(`Score: ${score},  Grade: ${grade}`);