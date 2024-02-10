// 2. In the links.js file, create a baseURL variable that references 
// your root wdd230 repository, GitHub pages URL.
const baseURL = "https://mszakutumela.github.io/wdd230/";
const linksURL = "https://mszakutumela.github.io/wdd230/data/links.json";

// 4. Write an asynchronous function to get the links data in the links.json data file.
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks()
}
getLinks();

// 6. In the getLinks function, add a new line of code at the end that calls a function that 
// will build out the available activity links from the data response. Name the function displayLinks.
// Send the data as an argument.


