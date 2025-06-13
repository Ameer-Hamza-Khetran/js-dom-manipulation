/**
 * DOM MANIPULATION
 * Selecting an element - 5 major ways to select an element
 *
 * getElementById()
 *
 * getElementsByClassName()
 *
 * getElementsByTagName()
 *
 * querySelector()
 *
 * querySelectorAll()
 */

const title = document.getElementById("main-heading");
console.log(title);

const listItems = document.getElementsByClassName("list-items");
console.log(listItems);

const listItemsByTagName = document.getElementsByTagName("li");
console.log(listItems);

const container = document.querySelector("div");
console.log(container);

const containers = document.querySelectorAll("div");
console.log(containers);
