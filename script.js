document.querySelector(".arrow-icon").addEventListener("click", function() {
    let arrow = this.querySelector("svg");
    arrow.style.filter = "blur(2px)";

    setTimeout(() => {
        arrow.style.filter = "blur(0px)";
    }, 500);
});
