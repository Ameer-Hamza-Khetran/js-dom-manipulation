const openBtn = document.querySelector("#modal-button");
const closeBtn = document.querySelector("#close-button");
const modal = document.querySelector("#modal-container");
const outsideModal = document.querySelector(".main-content");

openBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    console.log(e.target);

    if (e.target === outsideModal && (modal.style.display = "block")) {
        modal.style.display = "none";
    }
});
