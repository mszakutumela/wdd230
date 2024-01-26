// Responsive Hamburger Menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelectorAll(".menu-button");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});


