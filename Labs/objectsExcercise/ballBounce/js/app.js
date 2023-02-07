// Haven Hamelin
// 01/25/23
// N220

let dvd;
function preload() {
  dvd = loadImage('img/dvdlogo.png');
}
let dvdSize = { x: 187, y: 83 }

//(Replace this with object)
//Define boundsX and boundsY, posX and posY, along with speedX and speedY
let boundsX = 800;
let boundsY = 600;
let posX = dvdSize.x/2;
let posY = dvdSize.y/2;
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
    image(dvd,posX,posY);
    //Check if posX is below 0 or above boundsX, if so multiply speedX by -1
    if(posX<0||posX>boundsX-(dvdSize.x)) {
        speedX *= -1;
    }
    //Check if posX is below 0 or above boundsX, if so multiply speedX by -1
    if(posY<0||posY>boundsY-(dvdSize.y)) {
        speedY *= -1;
    }
    //Add speedX and speedY to posX and posY, respectively
    posX += speedX;
    posY += speedY;
}