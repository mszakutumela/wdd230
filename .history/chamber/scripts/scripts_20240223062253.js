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

// W02: Dark Mode Button - Code pen code method (https://codepen.io/blazzard-jason/pen/ZERawEQ)
const darkMode = document.querySelector("#darkButton");
const mainElement = document.querySelector("main");

darkMode.addEventListener("click", () => {
	if (darkMode.textContent.includes("🕶️")) {
		mainElement.style.background = "#000";
		mainElement.style.color = "#fff";
		darkMode.textContent = "🔆";
	} else {
		mainElement.style.background = "#eee";
		mainElement.style.color = "#000";
		darkMode.textContent = "🕶️";
	}
});

// Form Submission Date
// let dateTimeToday = new Date();
// document.querySelector("input[name='date']").value = dateTimeToday;
// window.onload = function () {
// 	document.getElementById("#timestamp").value = timeStamp();
// 	console.log(timeStamp());
// };

// function timeStamp(mod) {
// 	var dateFormat = require("dateformat");
// 	mod = dateFormat(new Date());
// 	return mod;
// }
// _today: function () {
// 	var timeStamp = document.querySelector(timeStamp);
// 	var today = today.toISOString().substr(0, 10);
// };

// Visit Counter
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-Is"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
}
else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-Is", numVisits);

// Banner
const today = new Date();
if (today.getDay() == 0 || today.getDay() >= 4) {
	document.querySelector("#banner").className = "hide";
}
else {
	document.querySelector("#banner").className = "show";
}

// JSON and the Weather API
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDegsC = document.querySelector("#weatherDegsC");

const url = "https://api.openweathermap.org/data/2.5/weather?Pretoria&lat=-25.74&lon=28.18&units=imperial&appid=b9cc737521b8a6ba0b4048c7deb546c5";


async function apiFetch() {
    try {
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); //testing only
            displayResults(data); //uncomment when ready
        }
        else {
        throw Error(await response.text());
        } 
    }    
    catch (error) {
        console.log(error);
    }       
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let degsC = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSource);
    weatherIcon.setAttribute("alt", degsC);
    captionDegsC.textContent = `${degsC}`;
}

// Spotlight
const url = "./data/members.json";

async function getMembers() {
	const response = await fetch(url)
}

