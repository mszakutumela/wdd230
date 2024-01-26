// get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// get last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

// Responsive Hamburger Menu
const hambElement = document.querySelector("#menuButton");
const navElement = document.querySelectorAll(".menuLinks");

hamElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamElement.classList.toggle("open");
});


