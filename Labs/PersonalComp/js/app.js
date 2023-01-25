let delta = 0;
let eyesPos = 194.5;
let eyesDist = 60;
let x = 255;
let y = 0;


function setup() {
    createCanvas(1200, 768);
}

function draw() {
    background(255);
    //Create face outline
    stroke(0);
    fill(255);
    circle(195,170,325,325);
    //Create eyes outline
    stroke(0,0,0,x);
    fill(255,255,255,x);
    circle(eyesPos-eyesDist,120,50,50);
    circle(eyesPos+eyesDist,120,50,50);
    //Create pupils
    stroke(0,0,0,x);
    fill(0,0,0,x);
    circle(eyesPos-eyesDist,130,30,30);
    circle(eyesPos+eyesDist,130,30,30);
    //Create mouth
    stroke(0,0,0);
    noFill();
    arc(195, 170, 200, 200, 0 + QUARTER_PI, PI - QUARTER_PI);
    //Create closed eyes
    stroke(0,0,0,y);
    fill(0,0,0,0);
    line(eyesPos-eyesDist-25,120,eyesPos-eyesDist+25,120);
    line(eyesPos+eyesDist-25,120,eyesPos+eyesDist+25,120);
    
    if(delta>100&&delta<120) {
        x=0;
        y=255;
    }
    else {
        x=255;
        y=0;
    }
    if(delta<120) {
        delta++;
    }
    else {
        delta=0;
    }
}