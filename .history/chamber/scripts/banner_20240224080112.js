// Banner to appear only on Mondays, Tuesdays and Wednesdays

const closeButton = document.getElementById("close");
const bannerDisplay = document.querySelector(".banner");

closeButton.addEventListener("click", hideBanner)

function hideBanner() {
    displayBanner.style.display = "none"
}