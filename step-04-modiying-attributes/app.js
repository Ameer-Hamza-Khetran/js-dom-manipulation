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

// Modifying Attributes and Classes

li.setAttribute("id", "main-heading"); // adding id attribute and its value 'main-heading' to the li element

li.removeAttribute("id"); // removing id attribute from the li element.

// Getting attributes value using id

// const title = document.querySelector("h1");
// console.log(title);

// console.log(title.getAttribute("id"));

// Getting

li.classList.add("list-items");
//li.classList.remove("list-items");

console.log(li.classList.contains("list-items"));
