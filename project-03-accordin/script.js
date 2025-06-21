/**
 * Targeting individual Accordion
 */

// const accordion1 = document.querySelector(".accordion1");
// const accordion2 = document.querySelector(".accordion2");
// const accordion3 = document.querySelector(".accordion3");

// accordion1.addEventListener("click", function () {
//     this.classList.toggle("active");
// });

// accordion2.addEventListener("click", function () {
//     accordion2.classList.toggle("active");
// });

// accordion3.addEventListener("click", function () {
//     accordion3.classList.toggle("active");
// });

/**
 *
 * Using Loop to Target all at the same time
 */

const accordion = document.getElementsByClassName("content-container");
// console.log(accordion);
// console.log(accordion[1]);

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        accordion[i].classList.toggle("active");
    });
}
