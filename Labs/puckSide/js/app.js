// Haven Hamelin
// 01/25/23
// N220

//Define canvas X and Y size, along with circle radius as r and color for circle as color
let canvasX = 400;
let canvasY = 300;
let r = 50;
let color = { r: 0, g: 0, b: 0};


function setup() {
    createCanvas(canvasX, canvasY);
}

function draw() {
    background(255);
    noStroke();
    //color is blue when mouseX is left
    if(mouseX<canvasX/2) {
        color.r = 0;
        color.b = 255;
    }
    //color is red when mouseX is right
    else {
        color.r = 255;
        color.b = 0;
    }
    //Create circle when mouse pressed
    if(mouseIsPressed) {
        fill(color.r,color.g,color.b);
        circle(mouseX,mouseY,r);
    }

}