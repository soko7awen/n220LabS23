// Haven Hamelin
// 01/25/23
// N220

//Define boundsX and boundsY, posX and posY, along with speedX and speedY
let boundsX = 800;
let boundsY = 600;
let r = 50;
let posX = r/2;
let posY = r/2;
let speedX = 5;
let speedY = 5;


function setup() {
    createCanvas(boundsX, boundsY);
}

function draw() {
    background(255);
    noStroke();
    fill(0,200,40);
    //Create a circle of arbitrary size with position of (posX,posY)
    circle(posX,posY,r);
    //Check if posX is below 0 or above boundsX, if so multiply speedX by -1
    if(posX<0+(r/2)||posX>boundsX-(r/2)) {
        speedX *= -1;
    }
    //Check if posX is below 0 or above boundsX, if so multiply speedX by -1
    if(posY<0+(r/2)||posY>boundsY-(r/2)) {
        speedY *= -1;
    }
    //Add speedX and speedY to posX and posY, respectively
    posX += speedX;
    posY += speedY;
}