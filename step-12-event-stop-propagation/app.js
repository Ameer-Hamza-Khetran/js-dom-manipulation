window.addEventListener(
    "click",
    function () {
        console.log("window");
    },
    true
);

document.addEventListener(
    "click",
    function () {
        console.log("document");
    },
    true
);

document.querySelector(".div-2").addEventListener(
    "click",
    function (e) {
        console.log("stop propagation not runned");
        e.stopPropagation();
        console.log("stop propagation runned");
    },
    true
);

document.querySelector(".div-1").addEventListener(
    "click",
    function () {
        console.log("Div -1");
    },
    true
);

document.querySelector("button").addEventListener(
    "click",
    function (e) {
        console.log(e);
    },
    true
);
