// JSON and the Weather API
// 1. In the weather.js file, first select all of the HTML elements that will need to be 
// manipulated and assign them to const variables.
// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDegsC = document.querySelector("figcaption");

// // 2. Declare a const variable named "url" and assign it a valid URL string as 
// //given in the openweathermap api documentation.

// const currentUrl = "https://api.openweathermap.org/data/2.5/weather?Pretoria&lat=-25.74&lon=28.18&units=imperial&appid=b9cc737521b8a6ba0b4048c7deb546c5";


// //3. Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
// //4. Remember to invoke the apiFetch() function with a call somewhere in your script.
// async function apiFetch() {
//     try {
//         const response = await fetch (currentUrl);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data); //testing only
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

// // 5. Run the page locally and view the console output. Find the current temperature (temp) and the weather event description 
// // (weather.description), and image icon reference (weather[0].icon - 3 characters) in the data.
// function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//     const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let degsC = data.weather[0].description;
//     weatherIcon.setAttribute("src", iconSource);
//     weatherIcon.setAttribute("alt", `weather icon of ${data.name}`);
//     captionDegsC.textContent = `Today it is: ${degsC}`;
// }


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
        // console.log(tempHigh);
        tempLow.innerHTML = `${data.list[i].main.temp_min}&deg;F`;
        // console.log(tempLow);

        highTemp.appendChild(tempHigh);
        lowTemp.appendChild(tempLow);
    }
}    
