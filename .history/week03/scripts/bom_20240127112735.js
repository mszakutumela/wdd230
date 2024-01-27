
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
// --------------------------------------------------------------------------------------------------------------------
// W02: JavaScript: DOM Manipulation
// button.addEventListener("click", function()
// {
//     if (input.value != " ") {

//         const li = document.createElement("li");
//         const deleteButton = document.createElement("button");
//         li.textContent = input.value;
//         deleteButton.textContent = "❌";
//         li.append(deleteButton);
//         list.append(li);

//         deleteButton.addEventListener("click", () => {
//             list.removeChild(li);
//             input.focus();
//         });

//         input.focus();
//         input.value = " ";
//     }

//     else {
//         window.alert("Please enter book and chapter!");
//     }

// });
// --------------------------------------------------------------------------------------------------------------
// W03-Web Storage API - localStorage
// 2. Open the JavaScript file. Declare an array named chaptersArray and assign it to the results of a 
// defined function named getChapterList (This function does not exist, yet).
// 3. In that same array variable declaration and assignment, add a compound OR condition to assign it 
// an empty array in case this is the user's first visit or if the localStorage item is missing.
let chaptersArray = getChaptersList() || [];

// 4. Now let's populate the displayed list of chapters. Use a forEach on the chaptersArray to process each 
// entry named chapter. Use an arrow function within the loop to call a new defined function named displayList 
// and pass it the argument of chapter. That way each entry will be processed, i.e., appended to the list.
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// 5. Change the button click event listener to only do the following tasks (the other tasks in that original 
//     function will be used in a separate function named displayList):
button.addEventListener("click", () => {
    if (input.value != " ") {  
        displayList(input.value);  
        chaptersArray.push(input.value);
        setChaptersList();
        input.value = " ";
        input.focus();
    }
})

// 6. Create the displayList defined function that receives one parameter named item.
// 7. Put all the code that builds a list item from the previous button click event listener 
// into this new displayList function and use the item parameter as the input. A deleteChapter 
// function will need to be called within the delete button click event to remove the chapter 
// from the array and localStorage. 
function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item
}