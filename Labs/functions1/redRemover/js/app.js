// Haven Hamelin
// 02/02/23
// N220

//Define canvas size,
let canvasX = 800;
let canvasY = 600;

function setup() {
    createCanvas(canvasX, canvasY);
}

function draw() {
    //define variable noRed that takes in the result of removeRed (given the input of a color)
    let noRed = removeRed(color(170, 200, 150));
    //set the fill to noRed
    fill(noRed);
    //create a circle in the middle of the canvas with a radius of 100
    circle(canvasX/2,canvasY/2,100);
}

//declare function removeRed, which takes in a color called newColor
function removeRed(newColor) {
    //return the color with red removed
    return color(0,green(newColor),blue(newColor))
}