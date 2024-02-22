// 3. Using the JSON data source, display the member information on the page.

const url = "./data/members.json";

// const cors = require(cors);
// app.use(cors());

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

        const cardMembers = document.querySelector("#members");

        const busiLogo = document.createElement("img");
        const busiName = document.createElement("h3");
        const busiUrl = document.createElement("p");
        const busiAddress = document.createElement("p");
        const busiTel = document.createElement("p");
        const membLevel = document.createElement("p");
        const card = document.createElement("section");

        busiName.innerHTML = member.businessName;
        busiUrl.innerHTML = `<a href="${member.businessURL}" target="_blank">View Website</a>`;
        busiAddress.innerHTML = `Address: ${member.businessAddress}`;
        busiTel.innerHTML = member.businessTel;
        membLevel.innerHTML = member.membershipLevel;

        busiLogo.setAttribute("src", member.imgLogoUrl);
        busiLogo.setAttribute("alt", `${member.businessName} imgLogoUrl`);
        busiLogo.setAttribute("loading", "lazy");
        busiLogo.setAttribute("width", "240");
        busiLogo.setAttribute("height", "340");

        card.appendChild(busiLogo);
        card.appendChild(busiName);
        card.appendChild(busiAddress);
        card.appendChild(busiTel);
        card.appendChild(membLevel);
        card.appendChild(busiUrl);

        cardMembers.appendChild(card);        
    });
}

// Grid List Buttons
// 4. Let the user toggle between a "grid" type view of member cards or a simple, one-column list of members.

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("div#members");

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);

function showGrid() {
    display.classList.add("grid");
    display.classList.remove("list");
}

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}