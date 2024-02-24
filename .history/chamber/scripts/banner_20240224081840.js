// Banner to appear only on Mondays, Tuesdays and Wednesdays

const closeButton = document.getElementById("close");
const bannerDisplay = document.querySelector(".banner");

// closeButton.addEventListener("click", hideBanner);

// function hideBanner() {
//     displayBanner.style.display = "none";
// }

closeButton.addEventListener("click", () => {
    //     navElement.classList.toggle("open"); (Note when I used this code: Uncaught TypeError: Cannot read properties of undefined (reading 'toggle')
    //     at HTMLButtonElement.<anonymous> (getDates.js:14:26)
    // (anonymous) @ getDates.js:14)
        divElement.forEach(x => x.classList.toggle("close"));
        // hamburgerElement.forEach(x => x.classList.toggle("open"));
        hamburgerElement.classList.toggle("open");
    });


// Get the current date
const currentDate = new Date();

// Get the day of the week as a number
const dayOfWeek = currentDate.getDay();

// Array to map the day numbers to day names
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the day name corresponding to the day number
const currentDayOfWeek = daysOfWeek[dayOfWeek];

if(currentDayOfWeek === "Monday") {
    displayBanner.style.display = "block";
}
else if (currentDayOfWeek === "Tuesday") {
    displayBanner.style.display = "block";
}
else if (currentDayOfWeek === "Tuesday") {
    displayBanner.style.display = "block";
}
else {
    displayBanner.style.display = "none";
    // console.log(`No today is ${currentDayOfWeek}`);
}