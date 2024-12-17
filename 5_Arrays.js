import { countVowelsTwo } from "./6_Functions.js";
let arr = [22, 14, 55, 22, 64];
console.log(arr);
console.log(arr.length);
// In JS most of the things are considered as object so is array.
console.log(typeof(arr));

console.log("arr[1] = ",arr[1]);
console.log("arr[3] = ",arr[3]);
// Arrays are mutable in JS. They can be changed. Whereas Strings are immutable.
arr[3] = 77;
console.log(arr);
console.log("arr[3] = ",arr[3]);

// Looping Over Arrays
for(let i = 0; i < arr.length; i++) {
    console.log(`Looping of arr = ${arr[i]}`);
}

let players = ["Messi", "Ronaldo", "Mbappe", "Neymar"];
for(let i of players) {
    console.log(i.toUpperCase());
}

// Practice - 1
let marks = [85, 97, 44, 37, 76, 60];
console.log("Marks of Class: ", marks);
let sum = 0;
for(let mark of marks) {
    sum = sum + mark;
}
let avgMarks = sum / marks.length;
console.log("Average Mark of class: ",avgMarks);

// Practice - 2
let itemsPrice = [250, 645, 300, 900, 50]
console.log("Price of Items: ", itemsPrice);
for(let val = 0; val < itemsPrice.length; val++) {
    itemsPrice[val] -= (itemsPrice[val] / 10);
}
console.log("Price of Items after 10% discount: ", itemsPrice);


// Array Methods
// Some methods are mutable in arrays and some are not
// Push() -> Mutable : Adds element to the end of an array
let catBreeds = ["Persian", "Munchkin"];
console.log("Cat Breeds: ", catBreeds);
catBreeds.push("Fawn", "Calico");
console.log("Cat Breeds after pushing into the array: ", catBreeds);

// Pop() -> Mutable : pops the element from end of the array and returns the deleted element
let deletedBreed = catBreeds.pop();
console.log("Cat Breeds after pop: ", catBreeds);
console.log("Deleted Breed = ", deletedBreed);

// toString() -> Immutable : Converts the array into string with elements seperated by comma. Returns new string. 
// Does not change the original array
let evenNums = [2, 4, 6, 8, 10];
console.log("Before toString(): ", evenNums);
let evenNumsStr = evenNums.toString(); // Using variable to store the converted string as the method
//  will return new string as it is mutable
console.log("Using console.log(evenNums.toString()): ", evenNums.toString()); // Alternate method
console.log("After String Conversion with new variable let evenNumsStr: ", evenNumsStr);

// concat() -> Immutable : Concatenates 2 or more Arrays
let marvelHeroes = ["Spider Man", "Iron Man", "Hulk"];
console.log("Marvel Heros: ", marvelHeroes);
let dcHeroes = ["Batman", "Superman"];
console.log("DC Heros: ", dcHeroes);
let indianHeroes = ["Krish", "Hero"];
/* This code below will log out empty array cause concatenating and storing it into the heros array still
   means that heros array which is empty is being changed here so it still returns empty array
let heros = [];
console.log(heros);
marvelHeros.concat(dcHeros);
console.log("Heros: ", heros);
*/
// This will work as it implicitly returns the new array in heros. You can also concat 2 or more arrays
let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log("Heros: ", heroes);

// Unshift() -> Mutable : Adds element to the start
heroes.unshift("Doctor Strange");
console.log("Heroes after Unshift: ", heroes);

// shift() -> Mutable : Removes element from start
heroes.shift();
console.log("Heroes after Shift: ", heroes);

// slice() -> Immutable : Returns part of array
let slicedHeroes = heroes.slice(0, 3);
console.log(slicedHeroes);
console.log("Sliced Heroes: ", heroes.slice(0, 3));

// splice() -> Mutable : change original array (add, remove, replace)
// add Element
heroes.splice(2, 0, "Green Lantern");
console.log("Heroes after adding Green lantern at 2 index: ", heroes);
// delete Element
heroes.splice(3, 2);
console.log("Heroes after deleting 2 elements: Hulk and Batman", heroes);
// replace Element
heroes.splice(3, 1, "Batman");
console.log("Heroes after replacing 3rd index element Superman by deleting it and replace with Batman: ", heroes);


// Practice - 2
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("Companies: ", companies);
// a. Remove the first company from the array
let removed = companies.shift();
console.log("First Company: ", removed);
console.log("After Removing First Company: ", companies);
// b. Remove Uber & add Ola in its place
companies.splice(1, 1, "Ola");
console.log("After removing Uber and Adding Ola: ", companies);
// c. Add Amazon at the end
companies.push("Amazon");
console.log("Adding Amazon at the end: ", companies);

// calling countVowelsTwo from functions.js
console.log(countVowelsTwo("rahaman"));