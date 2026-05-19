const dropdown = document.querySelector(".dropdown");
const hamburg = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const themeButtons = document.querySelectorAll(".theme-toggle");

if (hamburg) {
    hamburg.addEventListener("click", () => {
        dropdown.style.transform = "translateY(0px)";
    });
}

if (cancel) {
    cancel.addEventListener("click", () => {
        dropdown.style.transform = "translateY(-500px)";
    });
}

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        themeButtons.forEach((btn) => {
            btn.innerHTML = isDark
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
        });
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeButtons.forEach((btn) => {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        });
    }

    const loader = document.querySelector(".loader");
    setTimeout(() => {
        if (loader) loader.classList.add("hidden");
    }, 800);

    const skillBars = document.querySelectorAll(".bar span");
    skillBars.forEach((bar) => {
        setTimeout(() => {
            bar.style.width = bar.dataset.width;
        }, 450);
    });
});
