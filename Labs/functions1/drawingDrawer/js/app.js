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
    background(255);
    noStroke();
    //Call drawCars() to the position of the mouse
    drawCars(mouseX+70,mouseY+70,30,70);
    drawCars(mouseX+70,mouseY-70,30,70);
    drawCars(mouseX-70,mouseY,30,70);
    //Call drawCars() to the position of the mouse plus some vector
    //Call drawCars() to the position of the mouse plus some other vector

}
//Declare function drawCars() that takes two arguments, x and y, and r (radius), and w (width)
function drawCars(x,y,r,w) {
    //Draw car body
    fill(255,0,0);
    rect(x-w/2,y-r,w,30);
    //Draw wheels
    fill(0);
    circle(x-w/2,y,r);
    circle(x+w/2,y,r);
}