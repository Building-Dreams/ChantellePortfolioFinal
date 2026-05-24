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


// Language switcher: Dutch / English
const languageButtons = document.querySelectorAll(".lang-toggle");

function setLanguage(language) {
    const elements = document.querySelectorAll("[data-nl][data-en]");

    elements.forEach((element) => {
        element.textContent = element.dataset[language];
    });

    document.documentElement.lang = language;
    document.documentElement.style.setProperty(
        "--typewriter-1",
        language === "nl" ? '"Student"' : '"A Student"'
    );
    document.documentElement.style.setProperty(
        "--typewriter-2",
        language === "nl" ? '"Harde werker"' : '"A Hard Worker"'
    );
    document.documentElement.style.setProperty(
        "--typewriter-3",
        language === "nl" ? '"Toekomstige engineer"' : '"A Future Engineer"'
    );

    localStorage.setItem("language", language);

    languageButtons.forEach((button) => {
        button.textContent = language === "nl" ? "EN" : "NL";
    });
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentLanguage = localStorage.getItem("language") || "nl";
        const newLanguage = currentLanguage === "nl" ? "en" : "nl";
        setLanguage(newLanguage);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "nl";
    setLanguage(savedLanguage);
});

if (typeof AOS !== "undefined") {
    AOS.init({
        offset: 0
    });
}

