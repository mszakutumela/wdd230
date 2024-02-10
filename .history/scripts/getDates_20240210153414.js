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

// W03: Visit Counter
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-Is")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
}
else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-Is", numVisits);

// W03: Maps JavaScript API
// const googleMap = document.querySelector(".map");
// const maps = document.querySelector(".map");

// let map;

// async function initMap() {
//   const { Map } = await googleMap.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();

// W05: Team Activity - JSON and the Weather API
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDegsC = document.querySelector("#weatherDegsC");

const url = "https://api.openweathermap.org/data/2.5/weather?Centurion&lat=-25.86&lon=&untis=imperial&appid=63583805f5aa2daab27018765f6c55f8";

async function apiFetch() {
    try {
        const response = await fetch (url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
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
    let degsc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSource);
    weatherIcon.setAttribute("alt", degsc);
    captionDescription.textContent = `${degsc}`;
}
