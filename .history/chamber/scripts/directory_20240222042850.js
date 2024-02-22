// 3. Using the JSON data source, display the member information on the page.

const url = "https://github.com/mszakutumela/wdd230/blob/main/chamber/data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.members);
            displayMembers(data.members);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

getMembers();

function displayMembers(members) {
    members.forEach((member) => {

        const cardMember = document.querySelector("#members");
        const busiName = document.createElement("h2");
        const busiUrl = document.createElement("p");
        const busiAddress = document.createElement("p");
        const busiTel = document.createElement("p");
        const membLevel = document.createElement("p");

        busiName.innerHTML = member.businessName;
        busiUrl.innerHTML = `<`

        
    });
}