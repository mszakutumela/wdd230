// 2. In the links.js file, create a baseURL variable that references 
// your root wdd230 repository, GitHub pages URL.
const baseURL = "https://mszakutumela.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.json`;
const ul = document.getElementByIdElement("weeks");

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

        if (title4 == "" && url4)


    });
}


const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement("li");
        li.innerHTML = `${weeks.week}: ${weeks.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(" | ")}`;
        
        ul.appendChild();
        
    });
        
}



