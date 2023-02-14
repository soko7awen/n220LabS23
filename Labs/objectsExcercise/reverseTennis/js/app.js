// Haven Hamelin
// 02/09/23
// N220

//Define canvas size,
let canvasX = 800;
let canvasY = 600;


//Define two objects, with x, y, width, and height
//One will be left, the other right
let rectLeft = {
    x: canvasX/2-200,
    y: canvasY/2,
    width:50,
    height:200
}
let rectRight = {
    x: canvasX/2+200,
    y: canvasY/2,
    width:50,
    height:200
}

function setup() {
    createCanvas(canvasX, canvasY);
    
}

function draw() {
    background(255);
    //Draw objects based on properties defined
    //If up key is pressed, first object moves up, second moves down
    //Visa versa if down key is pressed
    fill(0);
    rect(rectLeft.x,rectLeft.y,rectLeft.width,rectLeft.height);
    rect(rectRight.x,rectRight.y,rectRight.width,rectRight.height);
    if (keyIsDown(UP_ARROW)) {
        rectRight.y++;
        rectLeft.y--;
      }
    if (keyIsDown(DOWN_ARROW)) {
        rectRight.y--;
        rectLeft.y++;
    }
}


