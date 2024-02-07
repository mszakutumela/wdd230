document.addEventListener("DOMContentLoaded", function (){
    const rangeValue = document.getElementById("rangeValue");
    const range = document.getElementById("rating");

    // Range event listener
    range.addEventListener("change", displayRatingValue);
    range.addEventListener("input", displayRatingValue);

    
});