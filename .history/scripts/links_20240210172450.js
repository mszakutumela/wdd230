// 2. In the links.js file, create a baseURL variable that references 
// your root wdd230 repository, GitHub pages URL.
const baseURL = "https://mszakutumela.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.json`;

// 4. Write an asynchronous function to get the links data in the links.json data file.
async function getLinks() {
    try{
        const response = await fetch(linksURL);
        

    }
    
    const data = await response.json();
    // console.log(data);
    displayLinks(data);
}
getLinks();

// 6. In the getLinks function, add a new line of code at the end that calls a function that 
// will build out the available activity links from the data response. Name the function displayLinks.
// Send the data as an argument.
function displayLinks(weeks) {
    weeks.forEach((week) => {
        const ul = document.getElementByIdElement("#weeks");
                
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // portrait.setAttribute("src, prophet.imageurl"); simple but yet very big snytax error. this error caused the output not to display
        portrait.setAttribute("src", "prophet.imageurl");
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
        
    });
        
}



