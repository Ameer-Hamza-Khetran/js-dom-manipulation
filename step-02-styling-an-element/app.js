/**
 * DOM MANIPULATION
 * Styling an element
 */

const title = document.querySelector("#main-heading");
console.log(title);

title.style.color = "red";

const listItems = document.querySelectorAll("li");
console.log(listItems);

// listItems.style.color = "red"
// does not work because the querySelectorAll return the node list an array not a single node element and style property
// applies  on single node element.

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "red";
}
