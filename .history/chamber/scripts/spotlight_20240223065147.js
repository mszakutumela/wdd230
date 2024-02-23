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

    const busiUrl = document.createElement("a");
    busiUrl.innerHTML = `Visit ${member.name}`;
    busu
    
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
