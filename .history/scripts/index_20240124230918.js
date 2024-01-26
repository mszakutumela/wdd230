// Responsive Hamburger Menu
const menuButton = document.querySelector("#menu");
const menuItems = document.querySelectorAll(".menu");

menuButton.addEventListener("click", () => {
    menuItems.forEach((item) => item.classList.toggle("open"));
    menuButton.classList.toggle("close");
});


