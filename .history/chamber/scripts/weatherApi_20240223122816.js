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
