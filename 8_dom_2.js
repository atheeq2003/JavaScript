// To get attribute value of specific element
let attr = document.querySelector("h5");
console.log(attr.getAttribute("name"));
let divis = document.querySelector("div");
console.log(divis.getAttribute("class"));
// To set value for the attribute
attr.setAttribute("name", "hello Thanush");
console.log(attr.getAttribute("name"));
// node.style -> To change the style of css elements
let color = document.querySelector("#GOAT");
color.style.backgroundColor = "dodgerblue";
document.querySelector("#GOAT").innerText = "Greatest of all Time (MESSI)";
document.querySelector("h5").style.visibility = "hidden";

// Creating new Element 
let newDiv = document.createElement("div");
console.log(newDiv);
// para // heading // button -> heading, para, button
// append inside a node
let para = document.createElement("p");
newDiv.append(para);
para.innerText = "I am Iron Man";
// prepend inside a node
let heading = document.createElement("h2");
heading.innerText = "IRON MAN";
newDiv.prepend(heading);
// append inside a node
let button = document.createElement("button");
button.innerText = "Submit Superhero";
newDiv.append(button);
// placing the new div after a specific element
let box = document.body.children[4];
box.after(newDiv);
// To remove the node
button.remove();

// Practice - 1
let newButton = document.createElement("button");
newButton.innerText = "Click Me!";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
let bodies = document.querySelector("body");
bodies.prepend(newButton);

// Practice - 2
// Adding one more class to the p tag -> will have 2 class in the end paraClass and newparaClass
let classes = document.querySelector(".paraClass1");
classes.classList.add("paraClass2");
