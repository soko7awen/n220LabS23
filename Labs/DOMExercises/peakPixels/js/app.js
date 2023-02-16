// Haven Hamelin
// 02/16/23
// N220

//Get element by id "GreenSquare" and assign to variable "greenSquare"
let greenSquare = document.getElementById("GreenSquare");
//Create variables "width" and "height", and assign them to greenSquare's w and h
let width = 100;
let height = 100;
greenSquare.style.width = width + "px";
greenSquare.style.height = height + "px";

//Set backgroundColor to green
greenSquare.style.backgroundColor = "green";

//Connect event greensquare onClick to function increaseSquare()
function increaseSquare() {
    //Multiply width and height by 1.1
    width *= 1.1;
    height *= 1.1;
    //Reassign width and height
    greenSquare.style.width = width + "px";
    greenSquare.style.height = height + "px";
}