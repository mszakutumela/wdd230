// get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// get last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

// Responsive Hamburger Menu
const hamElement = document.querySelector("#menuButton");
const navElement = document.querySelectorAll(".menuLinks");

menuEleement.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});


