// Spotlight
const url = "./data/members.json";

async function getMembers() {
	const response = await fetch(url);
	const data = await response.json();
	const spotlightMembers = data.members.filter(
		(level) => 
		level.membershipLevel == "Gold" || level.membershipLevel == "Silver"
	);
}
