/**
 * DOM MANIPULATION
 * Traversing the DOM
 */

// Parent Node Traversal
let ul = document.querySelector("ul");

console.log(ul.parentNode);
console.log(ul.parentElement);

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html);
console.log(html.parentNode);
console.log(html.parentElement);

// Child Node Traversal
