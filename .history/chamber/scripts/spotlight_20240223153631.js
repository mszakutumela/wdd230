// Spotlight
const url = "./data/members.json";

async function getMembers() {
	const response = await fetch(url);
	const data = await response.json();
	const spotlightMembers = data.members.filter(
		(level) => 
		level.membershipLevel == "Gold" || level.membershipLevel == "Silver"
	);

    displayMembers(spotlightMembers);
}

getMembers();

function displayMembers(members) {
    for (let i = 0; i < 3; i++) {
        index = Math.floor(Math.random() * members.length);
        selectedMember = members[index];
        members.splice(index, 1);
        // console.table(selectedMember);
        displaySpotlightCard(selectedMember);
    }
};

const spotlightCard = document.querySelector(".cards");
function displaySpotlightCard(member) {
    const card = document.createElement("section");
    card.className = "spotlight";

    const busiName = document.createElement("h3");
    busiName.innerHTML = member.businessName;

    const busiLogo = document.createElement("img");
    busiLogo.setAttribute("src", member.imgLogoUrl);
    busiLogo.setAttribute("alt", `${member.businessName} imgLogoUrl`);
    busiLogo.setAttribute("loading", "lazy");
    busiLogo.setAttribute("width", "240");
    busiLogo.setAttribute("height", "340");

    const busiAddress = document.createElement("p");
    busiAddress.innerHTML = member.businessAddress;

    const busiUrl = document.createElement("a");
    busiUrl.innerHTML = `Visit ${member.businessName}`;
    busiUrl.href = member.businessURL;
    
    const busiTel = document.createElement("p");
    busiTel.innerHTML = member.businessTel;

    const membLevel = document.createElement("p");
    membLevel.innerHTML = member.membershipLevel;  
    
    card.appendChild(busiName);
    card.appendChild(busiLogo);
    card.appendChild(busiAddress);
    card.appendChild(busiTel);
    card.appendChild(membLevel);
    card.appendChild(busiUrl);

    spotlightCard.appendChild(card);        
}


// JSON and the Weather API
// 1. In the weather.js file, first select all of the HTML elements that will need to be 
// manipulated and assign them to const variables.
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDegsC = document.querySelector("figcaption");

// 2. Declare a const variable named "url" and assign it a valid URL string as 
//given in the openweathermap api documentation.
// const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&untis=imperial&appid=b9cc737521b8a6ba0b4048c7deb546c5"; (spelled units wrong)
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=b9cc737521b8a6ba0b4048c7deb546c5";


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
    const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let degsC = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSource);
    weatherIcon.setAttribute("alt", `weather icon of ${data.name}`);
    captionDegsC.textContent = `Today it is: ${degsC}`;
}
