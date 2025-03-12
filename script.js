document.querySelector(".arrow-icon").addEventListener("click", function() {
    let arrow = this.querySelector("svg");
    arrow.style.filter = "blur(2px)";

    setTimeout(() => {
        arrow.style.filter = "blur(0px)";
    }, 500);
});

document.querySelector("#get-in-touch-button").addEventListener("click", function() {
    let buttonText = this.querySelector("a");
    buttonText.style.filter = "blur(2px)";

    setTimeout(() => {
        buttonText.style.filter = "blur(0px)";
    }, 500);
});
