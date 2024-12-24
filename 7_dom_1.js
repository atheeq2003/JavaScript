// Displays body's object's properties and methods
console.dir(document.body); 
// Displays body's html code
console.log(document.body); 
console.dir(document.body.children[0]);
console.log(document.body.children[0]);
document.body.style.background = "lightyellow";
document.body.children[0].style.backgroundColor = "yellow";
// getElementById
let heading = document.getElementById("head2");
console.dir(heading);
console.log(heading);
// getElementsByClassName
// Gives HTML Collections
let classes = document.getElementsByClassName("box"); 
console.dir(classes);
console.log(classes);
// getElementsByTagName
let tags = document.getElementsByTagName("p");
console.dir(tags);
console.log(tags);
let headQuery = document.querySelector("#head2");
console.dir(headQuery);
console.log(headQuery);
// Returns first element
let firstEle = document.querySelector(".box"); 
console.dir(firstEle);
console.log(firstEle);
// Returns NodeList
let allEle = document.querySelectorAll(".box");
console.dir(allEle);
console.log(allEle);
// Using ID
let buttons = document.querySelector("#firstButton");
console.dir(buttons);
console.log(buttons);

// Properties
// tagName -> to print any element's tag
let names = firstButton.tagName;
console.log("tagName of firstButton: ", names);

// innerText -> returns the text content of the element and all its children
let inText = document.querySelector("body").innerText;
console.log("innerText of body tag: ", inText);

// innerHTML -> returns the html contents of the element
let inHtml = document.querySelector("body").innerHTML;
console.log("innerHTML of the body tag: ", inHtml);
// Changing or manipulating html <p> tag: <p>GOAT - Greatest of all Time (MESSI)</p>
document.querySelector("p").innerHTML = "LIONEL MESSI"; // Changed to LIONEL MESSI

// textContent -> returns textual content even for hidden elements
let hidden = document.querySelector("h3").innerText;
console.log("hidden h3 heading using innerText: ", hidden);
let hidden1 = document.querySelector("h3").textContent;
console.log("hidden h3 heading using textContent: ", hidden1);

// Practice - 1
document.querySelector("h2").innerText += " from Atheeq";

// Practice - 2
let divisions = document.querySelectorAll(".box");
divisions[0].innerText = "Atheeq";
divisions[1].innerText = "Thanush";
divisions[2].innerText = "Dharshanpriya";
console.dir(divisions[0].innerText);
console.dir(divisions[1].innerText);
console.dir(divisions[2].innerText);
let divs = document.querySelectorAll(".box");
let index = 1;
for(let div of divs) {
    div.innerText = `New Unique Element ${index}`;
    index++;
}
console.log("After Change: ");
for(let i of divs) {
    console.log(i.innerText);
}
