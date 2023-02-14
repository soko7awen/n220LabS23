// Haven Hamelin
// 01/25/23
// N220

let bounds = {
    x: 800,
    y: 600
}

//(Replace this with object)
//Define boundsX and boundsY, posX and posY, along with speedX and speedY

let dvd = {
    image: null,
    sizeX: 187,
    sizeY: 83,
    posX: 0,
    posY: 0,
    speedX: 5,
    speedY: 5

};

dvd.posX = dvd.sizeX/2;
dvd.posY = dvd.sizeY/2;

function preload() {
    dvd.image = loadImage('img/dvdlogo.png');
  }

function setup() {
    createCanvas(bounds.x, bounds.y);
}

function draw() {
    background(255);
    noStroke();
    fill(0,200,40);
    //Create a circle of arbitrary size with position of (posX,posY)
    image(dvd.image,dvd.posX,dvd.posY);
    //Check if posX is below 0 or above boundsX, if so multiply speedX by -1
    if(dvd.posX<0||dvd.posX>bounds.x-(dvd.sizeX)) {
        dvd.speedX *= -1;
    }
    //Check if posX is below 0 or above boundsX, if so multiply speedX by -1
    if(dvd.posY<0||dvd.posY>bounds.y-(dvd.sizeY)) {
        dvd.speedY *= -1;
    }
    //Add speedX and speedY to posX and posY, respectively
    dvd.posX += dvd.speedX;
    dvd.posY += dvd.speedY;
}