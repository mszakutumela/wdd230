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
        members.splice(undix, 1);
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

    const busiUrl = document.createElement("");
    
    const busiTel = document.createElement("p");
    const membLevel = document.createElement("p");

    
    busiUrl.innerHTML = `<a href="${member.businessURL}" target="_blank">View Website</a>`;
    
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
}