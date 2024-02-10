// 1. In the weather.js file, first select all of the HTML elements that will need to be 
// manipulated and assign them to const variables.
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDescription = document.querySelector("figcaption");

// 2. Declare a const variable named "url" and assign it a valid URL string as 
//given in the openweathermap api documentation.
const url = "https://api.openweathermap.org/data/2.5/weather?lat={49.76}&lon={6.64}&appid={63583805f5aa2daab27018765f6c55f8}";

//3. Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
//4. Remember to invoke the apiFetch() function with a call somewhere in your script.
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

// 5. Run the page locally and view the console output. Find the current temperature (temp) and the weather event description 
// (weather.description), and image icon reference (weather[0].icon - 3 characters) in the data.
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    cat
}




