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
    //define res with the result of polarPoint, given a value of 30
    let res = polarPoint(30);
    //translate canvas x and y by 100
    translate(100,100);
    //create a circle at res.x and res.y, with a radius of 10
    circle(res.x,res.y,10)
}

function polarPoint(r) {
    //Find the polar point of mouseX, and return it as a vector
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
}