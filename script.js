document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.02)";
            section.style.transition = "0.3s";
        });

        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
        });
    });
});