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

const url = "https://api.openweathermap.org/data/2.5/weather?Centurion&lat=-25.86&lon=28.19&untis=imperial&appid=63583805f5aa2daab27018765f6c55f8";

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

// 2. In the links.js file, create a baseURL variable that references 
// your root wdd230 repository, GitHub pages URL.
const baseURL = "https://mszakutumela.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.json`;

// 4. Write an asynchronous function to get the links data in the links.json data file.
// 5. Test the JSON result by writing the data to the console. In order to test your work 
// at this point, you will need to write a line of code in links.js which calls the getLinks() 
// function. Once your are satisfied or producing links, remove the console.log() statement.
// 6. In the getLinks function, add a new line of code at the end that calls a function that 
// will build out the available activity links from the data response. Name the function displayLinks.
// Send the data as an argument.
async function getLinks() {
    try{
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayLinks(data.weeks);
        }
        else {
            throw Error(await response.text());
        }        
    }
    catch (error) {
        console.log(error);
    } 
}

getLinks();

// 7. Create the displayLinks() function and name the function's single parameter weeks. Remember from the 
// json data that you wrote and tested that the data is an array of objects representing weeks of the term.
function displayLinks(weeks) {
    weeks.foreach((week) => {
        const list = document.querySelector(".weeks");
        const activities = document.createElement("li");
        const weekNumber = week.week;
        //W01
        const title1 = week.links[0].title;
        const url1 = week.links[0].url;
        //W02
        const title2 = week.links[1].title;
        const url2 = week.links[1].url;
        //W03
        const title3 = week.links[2].title;
        const url3 = week.links[2].url;
        //W04
        const title4 = week.links[3].title;
        const url4 = week.links[3].url;

        if (title4 == "" && url4 == "") {
            activities.innerHTML = `${weekNumber}: <a href="${url1}">${title1}</a> | <a href="${url2}">${title2}</a> | <a href="${url3}">${title3}</a>`;
        }
        else {
            activities.innerHTML = `${weekNumber}: <a href="${url1}">${title1}</a> | <a href="${url2}">${title2}</a> | <a href="${url3}">${title3}</a> | <a href="${url4}">${title4}</a>`;
        }

        list.appendChild(activities);
    });
}

