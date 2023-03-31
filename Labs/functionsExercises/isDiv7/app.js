//Create variables for relevant DOM elements
let input = document.getElementById("Input");
let div = document.getElementById("Div");

//function called by onlick
function onClick() {
    //Variable for the value of input
    let val = input.value
    //Sets the innerHTML of div to a message that says the value of input is (not) divisible by 7.
    div.innerHTML = val + isDivisible(val) + " by 7.";
}

//function that checks whether or not is divisible, returns appropriate string
function isDivisible(num) {
    if (num%7 == 0) return " is divisible";
    else return " is not divisible";
}