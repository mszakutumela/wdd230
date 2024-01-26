// Responsive Hamburger Menu
const menuButton = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu-button");

menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("open"));
    menuButton.classList.toggle("close");
});


