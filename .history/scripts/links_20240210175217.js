// 2. In the links.js file, create a baseURL variable that references 
// your root wdd230 repository, GitHub pages URL.
const baseURL = "https://mszakutumela.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.json`;
const ul = document.getElementByIdElement("weeks");

// 4. Write an asynchronous function to get the links data in the links.json data file.
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


const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement("li");
        li.innerHTML = `${weeks.week}: ${weeks.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(" | ")}`;
        
        ul.appendChild();
        
    });
        
}



