/**
 * DOM
 * Event Delegation
 */
document.querySelector("#sports").addEventListener("click", function (e) {
    console.log(e.target.getAttribute("id") + " is Clicked");
    const target = e.target;
    if (target.matches("li")) {
        target.style.backgroundColor = "blue";
    }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "Rugby";
newSport.setAttribute("id", "rugby");

sports.appendChild(newSport);

// ------ Using Individually  Without event delegation------
// document.querySelector("#football").addEventListener("click", function (e) {
//     console.log("Football is Clicked");
//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "blue";
//     }
// });
// document.querySelector("#tennis").addEventListener("click", function (e) {
//     console.log("Tennis is Clicked");
//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "blue";
//     }
// });
// document.querySelector("#basketball").addEventListener("click", function (e) {
//     console.log("Basketball is Clicked");
//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "blue";
//     }
// });
// document.querySelector("#boxing").addEventListener("click", function (e) {
//     console.log("Boxing is Clicked");
//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "blue";
//     }
// });
// document.querySelector("#golf").addEventListener("click", function (e) {
//     console.log("Golf is Clicked");
//     const target = e.target;
//     if (target.matches("li")) {
//         target.style.backgroundColor = "blue";
//     }
// });
