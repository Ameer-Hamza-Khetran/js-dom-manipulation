/**
 * DOM MANIPULATION
 * Traversing the DOM - child node
 */

// ----- Parent Node Traversal ------
// let ul = document.querySelector("ul");

// console.log(ul.parentNode);
// console.log(ul.parentElement);

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);

// ---- Child Node Traversal-----

// let ul = document.querySelector("ul");

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// //ul.firstChild.style.backgroundColor = "blue"; // this throws an error since first child is text node

// ul.childNodes[1].style.backgroundColor = "blue";

// ---- Selecting Element Nodes -----
// let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.children);
// console.log(ul.firstElementChild); // gives us first element
// console.log(ul.firstChild); // gives us first node
// console.log(ul.lastElementChild); // gives us last element
// console.log(ul.lastChild); // gives us last node

// ---- Sibling Node Traversal (at the same level)-----
let ul = document.querySelector("ul");

const div = document.querySelector("div");
console.log(div);

// node properties
console.log(ul.previousSibling);
console.log(ul.nextSibling);

// element properties
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
