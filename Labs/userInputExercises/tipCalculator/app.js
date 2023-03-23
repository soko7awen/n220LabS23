//Add variables for relevant DOM elements
let input = document.getElementById("Input");

//Define tip function
function tip() {
    //Log tip message to console, calculate 20% of the input element's value for the tip, aswell as 120% for the total
    console.log("Tip: " + (input.value*.2).toFixed(2) + ". Total: " + (input.value*1.2).toFixed(2));
}