/**
 * DOM MANIPULATION
 * creating and adding elements
 */

// Creating elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

// adding elements
ul.append(li);

// Modifying the Text
const firstItem = document.querySelector(".list-items");
console.log(firstItem);

console.log(firstItem.innerHTML);
console.log(firstItem.innerText);
console.log(firstItem.textContent);

li.innerText = "X-Men";

// Modifying Attributes and Classes

li.setAttribute("id", "main-heading"); // adding id attribute and its value 'main-heading' to the li element

// li.removeAttribute("id"); // removing id attribute from the li element.
