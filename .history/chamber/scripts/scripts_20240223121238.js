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
const lat = "-25.7449";
const long = "28.1878";
const key = "645aef20592cb313a5cd0ed8daaad997";

const currentUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon{long}&appid=${key}&units=imperial`;
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon{long}&appid=${key}&units=imperial`;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weatherDesc");

// Current weather
async function getCurrentWeather() {
    try {
        const responseCurrent = await fetch(currentUrl);
        if (responseCurrent.ok) {
            const dataCurrent = await responseCurrent.json();
            // console.log(dataCurrent);
            displayCurrentWeather(dataCurrent);
        }
        else {
            throw Error(await responseCurrent.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
getCurrentWeather();

// Forecast weather
async function getForecastWeather() {
    try {
        const responseForecast = await fetch(forecastUrl);
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            // console.log(dataForecast);
            displayForecastWeather(dataForecast);
        }
        else {
            throw Error(await responseForecast.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
getForecastWeather();

function displayCurrentWeather(data) {
    // console.log(data);
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute("src", iconSource);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = `${desc}`;
    }

function displayForecastWeather(data) {
    // console.log(data);
    const highTemp = document.querySelector("#forecastHigh");
    const lowTemp = document.querySelector("#forecastLow");

    for (let i = 0; i < 3; i++) {
        // console.table(data.daily[i]);
        const tempHigh = document.createElement("li");
        const tempLow = document.createElement("li");

        tempHigh.innerHTML = `${data.list[i].main.temp_max}&deg;F`;
        console.log(tempHigh)

    }
}    
































// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDegsC = document.querySelector("#weatherDesc");

// const url = "https://api.openweathermap.org/data/2.5/weather?Pretoria&lat=-25.74&lon=28.18&units=imperial&appid=b9cc737521b8a6ba0b4048c7deb546c5";


// async function apiFetch() {
//     try {
//         const response = await fetch (url);
//         if (response.ok) {
//             const data = await response.json();
//             // console.log(data); //testing only
//             displayResults(data); //uncomment when ready
//         }
//         else {
//         throw Error(await response.text());
//         } 
//     }    
//     catch (error) {
//         console.log(error);
//     }       
// }

// apiFetch();

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//     const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let degsC = data.weather[0].description;
//     weatherIcon.setAttribute("src", iconSource);
//     weatherIcon.setAttribute("alt", degsC);
//     captionDegsC.textContent = `${degsC}`;
// }


