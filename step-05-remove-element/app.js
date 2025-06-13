/**
 * DOM MANIPULATION
 * creating and adding elements
 */

// Creating elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

// adding elements
ul.append(li);

li.innerText = "X-Men";

// Removing element

li.remove();
