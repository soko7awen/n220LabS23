//Declare vector2 'click' for mouse click position
let click = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //When mouse pressed, set click to mouse position
  if(mouseIsPressed) {
    click.x = mouseX;
    click.y = mouseY;
  }
  //Declare length as the distance from the initial click to the current mouse position
  let length = distance( click, { x: mouseX, y: mouseY });
  //When the length is longer than 120, line will be red, otherwise line will be black
  if(length > 120) {
    stroke("#FF0000");
  } else {
    stroke("#000000");
  }
  //Draw a line starting at position of initial mouse click to current mouse position
  line(click.x, click.y, mouseX, mouseY);
}
//Initialize function distance() that takes in two parameters, p1 and p2
function distance(p1, p2) {
  //Define dx and dy as x and y distance from p1 and p2
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //Return the distance
  return Math.sqrt(dx*dx + dy*dy);
}