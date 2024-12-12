import { instaProfile } from "./1_Object.js";
let str = "Atheeq";
console.log(str);
console.log("Length of the String: ", str.length);
console.log("str[0] = ",str[0]);

// Template Literals
// A way to have embedded expression in strings. Using `` -> Backtick
console.log("Username is ", instaProfile.userName, " and No of Posts is ", instaProfile.no_Of_Posts);
// Using placeholders to embed expressions is called String Interpolation
// Instead we can write like this using Template literals
console.log(`Username is ${instaProfile.userName} and No of Posts is ${instaProfile.no_Of_Posts}`);
console.log(`This is a Template Literal calculating 1+2+3 = ${1+2+3}`);
// Escape Characters -> \n and \t
let str2 = " Peter \n Parker";
console.log(str2.length); // 15
// counts \t as one character
let str3 = "Peter \t Parker";
console.log(str3.length); // 14

// String Methods
// Strings are immutable(Original String is not changed) in javascript. So you have to assign it to newStr and then log it.
let upperStr = str.toUpperCase();
console.log("Uppercase String: ", upperStr);
// When you call str.toUpperCase(), JavaScript computes the new uppercase string and immediately passes it to console.log().
// This doesn't require storing the new string in a variable; the method call directly returns the transformed string for printing.
console.log(str.toUpperCase());
let lowerStr = str.toLowerCase();
console.log("Lowercase String: ", lowerStr);
// This trims the spaces before the sentence and after the sentence
let strtrim = "   Messi  is  GOAT    ";
let trimmed = strtrim.trim();
console.log(trimmed);
console.log(strtrim.trim());

// slice returns part of string slice(start, end); end is non-inclusive -> means it is not included
console.log(`Sliced string is: ${str.slice(0,5)}`);
// concatenates -> joins 2 strings
let concatStr = str.concat(trimmed);
console.log(concatStr);
// Another way is to 
concatStr = str + str2;
console.log(concatStr);
// Replace -> Replaces selected Value with new Value
let replaceStr = str.replace("q", "k");
console.log("Replaced String is: ", replaceStr);
replaceStr = str.replaceAll("e", "a");
// Replace all replaces all the repeated chars
console.log("Replaced All String is: ",replaceStr);
// charAt 
console.log("Char at 2: ", str.charAt(2));
// also can be done with
console.log(str[2]);
// str[0] = "B" -> This cannot be done as string are immutable. Instead we should use replace. str.replace("A", "B");

// Practice 1
let fullName = prompt("Enter your fullname without spaces: ");
console.log("Full Name: ", fullName);

let userName = fullName.toLowerCase();
userName = "@" + userName + userName.length;
console.log(`Username: ${userName}`);