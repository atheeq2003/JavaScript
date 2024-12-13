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