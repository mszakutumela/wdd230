// Responsive Hamburger Menu
const menuButton = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu-button");

menuButton.addEventListener("click", () => {
    menuItems.for.classList.toggle("open"));
    menuButton.classList.toggle("close");
});


