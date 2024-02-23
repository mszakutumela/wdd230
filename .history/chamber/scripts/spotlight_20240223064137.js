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
function displayspotlightCard(member) {
    const card = document.createElement("section");
    card.className = "spotlight"

    const busiLogo = document.createElement("img");
    const busiName = document.createElement("h3");
    const busiUrl = document.createElement("p");
    const busiAddress = document.createElement("p");
    const busiTel = document.createElement("p");
    const membLevel = document.createElement("p");

    busiName.innerHTML = member.businessName;
    busiUrl.innerHTML = `<a href="${member.businessURL}" target="_blank">View Website</a>`;
    busiAddress.innerHTML = member.businessAddress;
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
