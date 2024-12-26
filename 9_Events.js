// e -> event
let btn1 = document.querySelector("#button1");
btn1.onclick = (e) => {
    console.log("Button 1 was clicked");
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

let btn2 = document.querySelector("#button2");
btn2.ondblclick = (e) => {
    console.log("Button 2 was clicked 2x times");
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

let boxDiv = document.querySelector("#eventBox");
/* boxDiv.onmouseover = (e) => {
    console.log("You are inside the box!");
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}
*/

// You can write different functions for same event where as you cannot do that for normal functions
let btn3 = document.querySelector("#button3");
btn3.addEventListener("click", (e) => {
    console.log("Event-Handler for Button 3: 1");
    console.log(e.type);
})
btn3.addEventListener("click", (e) => {
    console.log("Event-Handler for Button 3: 2")
    console.log(e.type);
})
// To remove a eventlistener you should use a variable and store the function inside the variable and then pass the variable
// into the removeEventListener method
// This method can be used instead of the other two ways 
const handler3 = (e) => {
    console.log("Event-Handler for Button 3: 3")
    console.log(e.type);
}
const handler4 = (e) => {
    console.log("Event-Handler for Button 3: 4")
    console.log(e.type);
}
// Now you can pass this variable into addEventListener method
btn3.addEventListener("click", handler3);
btn3.addEventListener("click", handler4);
// Now if you want to remove handler3 you can pass it into removeEventListener
btn3.removeEventListener("click", handler3);

// Practice - 1
let body = document.querySelector("body");
let toggleBtn = document.querySelector("#toggle")
let mode = toggleBtn.getAttribute("mode");
const toggleHandler = () => {
    if(mode === "light") {
        toggleBtn.setAttribute("mode", "dark");
        body.classList.add("dark");
        body.classList.remove("light");
        toggleBtn.innerText = "Toggle mode: Dark";
        boxDiv.style.border = "4px solid white";
        boxDiv.style.color = "white";
        mode = "dark";
    }
    else {
        toggleBtn.setAttribute("mode", "light");
        body.classList.add("light");
        body.classList.remove("dark");
        toggleBtn.innerText = "Toggle mode: Light";
        boxDiv.style.border = "4px solid black";
        boxDiv.style.color = "black";
        mode = "light";
    }
}
toggleBtn.addEventListener("click", toggleHandler);

// Practice - 2
const boxMouseOver = () => {
    boxDiv.style.width = "200px";
    boxDiv.innerText = "Rectangle!";
}

const boxMouseLeave  = () => {
    boxDiv.style.width = "100px";
    boxDiv.innerText = "Square! Bring the pointer here";
}

boxDiv.addEventListener("mouseover", boxMouseOver);
boxDiv.addEventListener("mouseleave", boxMouseLeave);

