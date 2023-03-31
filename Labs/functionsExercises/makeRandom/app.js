//Create variable for div element
let div = document.getElementById("Div");

//Function called by onclick
function onClick() {
    //Sets the innerHTML to a message that says their number is some random number.
    div.innerHTML = "Your number is " + doRandom();    
}

//Function that returns a random number from 0-10, inclusive
function doRandom() {
    return Math.round((Math.random()*10));
}