/**
 * Event listeners allow us to interact with html elements by
 * listening to different events that are happening across the page.
 *
 * Three methods to include event listeners
 * First directly attach in the html
 * second add through js by adding it to the element
 */

// second method
const buttonTwo = document.querySelector(".btn-2");

// syntax to add event listener

// element.addEventListener(type, function to fire off, boolean value for event propagation)

function alertBtn() {
    alert("I also Love JavaScript");
}
buttonTwo.addEventListener("click", alertBtn);

// moverover event

const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);
