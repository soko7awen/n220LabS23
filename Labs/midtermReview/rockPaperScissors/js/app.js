// Haven Hamelin
// 03/02/23
// N220

//Set variables for DOM elements by id
let scoreBox = document.getElementById("ScoreBox");
let results = document.getElementById("Results");

//Create array "moves", containing names of moves at index of their corresponding id's
let moves = ["guard","rock","paper","scissors"];
//Create variable score, starting at 0, to keep track of score 
let score = 0;

//Create a function "whenClick" that is called onClick
function whenClick(player) {
    //Set opponent's move to random move value
    let opponent = Math.ceil(Math.random()*3);
    //If player does not guard, then add the result of rpsLogic
    if (player != 0) score += rpsLogic(player,opponent);
    //Otherwise, subtract .5 from score
    else score -= .5;
    //Update score and results
    scoreBox.innerHTML = "Score: " + score;
    results.innerHTML = "You chose " + moves[player] + ", computer chose " + moves[opponent];
    
}

function rpsLogic(p,o) {
    //If player and opponent choose the same move, then return 0
    if (p==o) return 0;
    //Otherwise, if the player makes a move that beats the opponent's, return 1
    else if (p==1&&o==3||p==2&&o==1||p==3&&o==2) return 1;
    //Otherwise, return -1
    else return -1;
}

