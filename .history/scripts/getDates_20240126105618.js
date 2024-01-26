// get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// get last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

// Responsive Hamburger Menu
const hamburgerElement = document.querySelector("#menuButton");
const navElement = document.querySelectorAll(".menuLinks");

hamburgerElement.addEventListener("click", () => {
    // navElement.classList.toggle("open"); 
    navElement.forEach(x => x.classList.toggle('open'));

    // hamburgerElement.classList.toggle("open");
});


