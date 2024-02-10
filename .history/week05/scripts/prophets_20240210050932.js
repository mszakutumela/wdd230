const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("");
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.}`;

        portrait.setAttribute();
        portrait.setAttribute();
        portrait.setAttribute();
        portrait.setAttribute();
        portrait.setAttribute();

        card.appendChild();
        card.appendChild(portrait);

        cards.appendChild()

    });
        
}