// 3. Using the JSON data source, display the member information on the page.

const url = "https://github.com/mszakutumela/wdd230/blob/main/chamber/data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.members);
            displayMembers(data.members);
        }
        else {
            
        }
    }
}