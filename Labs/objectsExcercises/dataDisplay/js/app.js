// Haven Hamelin
// 02/09/23
// N220

//Define canvas size,
let canvas = {
    x: 800,
    y: 600
}

//Define object, with width, height, color, and position
let rainbowObject = {
    width: canvas.x/2,
    height: canvas.y/2,
    color1: "#FF0000",
    color2: "#00FF00",
    color3: "#0000FF",
    x: canvas.x/2,
    y: canvas.y/2
}


function setup() {
    createCanvas(canvas.x, canvas.y);
    
}

function draw() {
    background(255);
    //Draw object using object arguments
    drawRainbow(rainbowObject);
}

//Define function that takes object as argument and draws it
function drawRainbow(rainbow) {
    noFill();
    strokeWeight(rainbow.width/10);
    strokeCap(SQUARE);
    stroke(rainbow.color3);
    arc(rainbow.x,rainbow.y,rainbow.width,rainbow.height,PI,TWO_PI)
    stroke(rainbow.color2);
    arc(rainbow.x,rainbow.y-rainbow.height/8,rainbow.width+rainbow.width/10,rainbow.height,PI-QUARTER_PI/4,TWO_PI+QUARTER_PI/4)
    stroke(rainbow.color1);
    arc(rainbow.x,rainbow.y-(2*rainbow.height)/8,rainbow.width+rainbow.width/5,rainbow.height,PI-QUARTER_PI/2,TWO_PI+QUARTER_PI/2)
}