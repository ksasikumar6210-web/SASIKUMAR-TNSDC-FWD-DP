// Small JS effect for highlight fade-in

document.addEventListener("DOMContentLoaded", () => {

    const highlight = document.querySelector(".highlight");

    highlight.style.opacity = 0;

    highlight.style.transition = "opacity 2s";

    setTimeout(() => {

        highlight.style.opacity = 1;

    }, 300);

});