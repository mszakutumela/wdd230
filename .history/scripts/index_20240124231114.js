// Responsive Hamburger Menu
const menuButton = document.querySelector("#menu");
const menu = document.querySelectorAll(".menu-button");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open"));
    menuButton.classList.toggle("close");
});


