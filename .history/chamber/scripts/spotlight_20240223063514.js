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

