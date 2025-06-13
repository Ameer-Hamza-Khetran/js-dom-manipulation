window.addEventListener(
    "click",
    function () {
        console.log("window");
    },
    false
);

document.addEventListener(
    "click",
    function () {
        console.log("document");
    },
    false
);

document.querySelector(".div-2").addEventListener(
    "click",
    function (e) {
        console.log("Div 2");
        console.log(e);
        console.log(e.target);
        console.log((e.target.innerText = "clicked!"));
    },
    false
);

document.querySelector(".div-1").addEventListener(
    "click",
    function () {
        console.log("Div -1");
    },
    false
);

document.querySelector("button").addEventListener(
    "click",
    function (e) {
        console.log(e);
    },
    false
);
