const div = document.createElement("div");
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";
// div.innerText = 'Khetran'
// innerText cost more in computation since it traverses the dom
// brings back the old innerText and then overwrites the old one with new one

// Alternative method is to create your text node

const addText = document.createTextNode("Khetran");
div.appendChild(addText);

document.body.appendChild(div);
