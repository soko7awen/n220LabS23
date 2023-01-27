// Haven Hamelin
// 02/02/23
// N220

//Define canvas size,
//let canvasX = 800;
//let canvasY = 600;


function setup() {
    createCanvas(canvasX, canvasY);
}

function draw() {
    background(255);
    noStroke();
    //Call drawCars() to the position of the mouse
    drawCars(mouseX,mouseY);
    //Call drawCars() to the position of the mouse plus some vector
    //Call drawCars() to the position of the mouse plus some other vector

}
//Declare function drawCars() that takes two arguments, x and y
function drawCars(x,y) {
    //Draw wheels
    circle(x-1,y-1,5);
    circle(x+1,y+1,5);
    //Draw car body
    //Draw window
}