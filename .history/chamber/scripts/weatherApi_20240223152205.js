// JSON and the Weather API
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDegsC = document.querySelector("figcaption");

const lat = "-25.7449";
const long = "28.1878";
const key = "645aef20592cb313a5cd0ed8daaad997";

const url = https://api.openweathermap.org/data/2.5/weather?Pretorialat=${lat}&lon{long}&appid=${key}&units=imperial`;





// const lat = "-25.7449";
// const long = "28.1878";
// const key = "645aef20592cb313a5cd0ed8daaad997";

// const currentUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon{long}&appid=${key}&units=imperial`;
// const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon{long}&appid=${key}&units=imperial`;

// const currentTemp = document.querySelector("#current-temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const captionDesc = document.querySelector("#weatherDesc");

// // Current weather
// async function getCurrentWeather() {
//     try {
//         const responseCurrent = await fetch(currentUrl);
//         if (responseCurrent.ok) {
//             const dataCurrent = await responseCurrent.json();
//             // console.log(dataCurrent);
//             displayCurrentWeather(dataCurrent);
//         }
//         else {
//             throw Error(await responseCurrent.text());
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// getCurrentWeather();

// // Forecast weather
// async function getForecastWeather() {
//     try {
//         const responseForecast = await fetch(forecastUrl);
//         if (responseForecast.ok) {
//             const dataForecast = await responseForecast.json();
//             // console.log(dataForecast);
//             displayForecastWeather(dataForecast);
//         }
//         else {
//             throw Error(await responseForecast.text());
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// getForecastWeather();

// function displayCurrentWeather(data) {
//     // console.log(data);
//         currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//         const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//         let desc = data.weather[0].description;
//         weatherIcon.setAttribute("src", iconSource);
//         weatherIcon.setAttribute("alt", desc);
//         captionDesc.textContent = `${desc}`;
//     }

// function displayForecastWeather(data) {
//     // console.log(data);
//     const highTemp = document.querySelector("#forecastHigh");
//     const lowTemp = document.querySelector("#forecastLow");

//     for (let i = 0; i < 3; i++) {
//         // console.table(data.daily[i]);
//         const tempHigh = document.createElement("li");
//         const tempLow = document.createElement("li");

//         tempHigh.innerHTML = `${data.list[i].main.temp_max}&deg;F`;
//         // console.log(tempHigh);
//         tempLow.innerHTML = `${data.list[i].main.temp_min}&deg;F`;
//         // console.log(tempLow);

//         highTemp.appendChild(tempHigh);
//         lowTemp.appendChild(tempLow);
//     }
// }    
