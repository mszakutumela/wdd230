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
//     navElement.classList.toggle("open"); (Note when I used this code: Uncaught TypeError: Cannot read properties of undefined (reading 'toggle')
//     at HTMLButtonElement.<anonymous> (getDates.js:14:26)
// (anonymous) @ getDates.js:14)
    navElement.forEach(x => x.classList.toggle("open"));
    // hamburgerElement.forEach(x => x.classList.toggle("open"));
    hamburgerElement.classList.toggle("open");
});

// Dark Mode Button - Code pen code example
const darkMode = document.querySelector("#darkButton");
const mainElement = document.querySelector("main");

darkMode.addEventListener("click", () => {
	if (darkMode.textContent.includes("🕶️")) {
		mainElement.style.background = "#000";
		mainElement.style.color = "#fff";
		darkMode.textContent = "🔆";
	} else {
		mainEle.style.background = "#eee";
		main.style.color = "#000";
		darkMode.textContent = "🕶️";
	}
});

// Dark Mode Button

