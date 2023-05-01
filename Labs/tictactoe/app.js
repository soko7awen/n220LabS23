//Add variables for all relevant elements
let container = document.getElementById("Container");
let playerText = document.getElementsByClassName("playerText")[0];
let winText = document.getElementsByClassName("winText")[0];
let tryAgain = document.getElementsByClassName("tryAgain")[0];
let playerLetter1 = document.getElementById("PlayerLetter1");
let playerLetter2 = document.getElementById("PlayerLetter2");
let redSlider1 = document.getElementById("RedSlider1");
let greenSlider1 = document.getElementById("GreenSlider1");
let blueSlider1 = document.getElementById("BlueSlider1");
let redSlider2 = document.getElementById("RedSlider2");
let greenSlider2 = document.getElementById("GreenSlider2");
let blueSlider2 = document.getElementById("BlueSlider2");

//Matrix representing grid
let grid = [
    [ 0,0,0 ],
    [ 0,0,0 ],
    [ 0,0,0 ]
];
//Array that matches integer to letter
let players = ["","X","O"]
//Current Player
let player = 1;
//Win state
let won = false;


//On click function
function onClick(me) {
    //Finds row and column of current element
    let col = Array.prototype.indexOf.call(me.parentNode.children, me);
    let row = Array.prototype.indexOf.call(me.parentNode.parentNode.children, me.parentNode);
    //Checks that game has not been won, and that the square is empty
    if (!won &&  grid[row][col] == 0) {
        //Sets the value of grid at the current square to be the current player's letter
        grid[row][col] = player;
        //Updates html to be current letter
        me.innerHTML = players[player];
        //Updates color
        sliderChange(player);
        //Checks if game has been won
        winCheck();
        //Alternates current player
        if (player == 1) player = 2;
        else player = 1;
        //Updates html to be current letter
        playerText.innerHTML = "Current Player: " + players[player];
    }
}

//Checks if game has been won
function winCheck() {
    //Create variable to check for empty spaces
	let zeros = false;
    //Loop first for empty square, then player 1's letter, then player 2's
    for (let i=0; i<=2; i++) {
        //Create arrays to store diagonal letters
        let diagPos = [];
        let diagNeg = [];
        //Loop j and i work together to check each row/column and it's inverse for 3-in-a-rows
        for (let j=0; j<=2; j++) {
            let row = [];
            let column = [];
            for (let k=0; k<=2; k++) {
                if (i>0) {
                    if (grid[j][k] == i) row.push(i);
                    if (grid[k][j] == i) column.push(i);
                }
                else {
                    if (grid[j][k] == i) zeros = true;
                }
            }
            let jInv = grid[0].length-1 - j;
            if (grid[j][j] == i) diagNeg.push(i)
            if (grid[jInv][j] == i) diagPos.push(i)
            //Check if there is any 3-in-a-rows
            if (i>0 && (row.length == 3 || column.length == 3 || diagPos.length == 3 || diagNeg.length == 3)) {
                //Hides the "Current player" text
                playerText.style.visibility = "hidden";
                //Shows the " Won!" text
                winText.innerHTML = players[i] + " won!";
                //Shows the "Try Again? button"
                tryAgain.style.visibility = 'visible';
                //Sets the win-state to true
                won = true;
            }
        }
    }
    //If there are no blank spots and the game was not won, then draw
	if (!won && !zeros) {
        //Hides the "Current player" text
        playerText.style.visibility = "hidden";
        //Shows the "Draw!" text
        winText.innerHTML = "Draw!";
        //Shows the "Try Again? button"
        tryAgain.style.visibility = 'visible';
        //Sets the win-state to true
        won = true;
    }
}

//Updates the color of the letter in accordance with the sliders
function sliderChange(p) {
    for (let i=0; i<=2; i++) {
            for (let j=0; j<=2; j++) {
                //Variable for current square
                let currentSquare = container.children[i].children[j];
                //if current square is the given player's letter, then update its color
                if (currentSquare.innerHTML == players[p]) {
                    if (p==1) currentSquare.style.color = `rgb(${redSlider1.value},${greenSlider1.value},${blueSlider1.value})`;
                    else if (p==2) currentSquare.style.color = `rgb(${redSlider2.value},${greenSlider2.value},${blueSlider2.value})`;
                }
            }
    }
}

function letterChange(p) {
    if (p==1) players[p] = playerLetter1.value;
    else players[p] = playerLetter2.value;
    playerText.innerHTML = "Current Player: " + players[player];
    for (let i=0; i<=2; i++) {
        for (let j=0; j<=2; j++) {
            //Variable for current square
            let currentSquare = container.children[i].children[j];
            //if current square is the given player's number, then update its letter
            if (grid[i][j] == p) {
                if (p==1) {
                    currentSquare.innerHTML = playerLetter1.value;
                }
                else if (p==2) {
                    currentSquare.innerHTML = playerLetter2.value;
                }
            }
        }
    }
}

//Reset back to default
function reset() {
    //Loop through the grid
    for (let r=0; r<=2; r++) {
        for (let c=0; c<=2; c++) {
            //Set all the 'grid' values to 0
            grid[r][c] = 0;
            //Set all the html to empty
            container.children[r].children[c].innerHTML = "";
            //Set current player back to 1
            player = 1;
            //Reset current player text
            playerText.style.visibility = 'visible';
            playerText.innerHTML = "Current Player: " + players[player];
            //Hide win text
            winText.innerHTML = "";
            //Hide try again button
            tryAgain.style.visibility = 'hidden';
            //Set win-state back to false
            won = false;
        }
    }
}

letterChange(1);
letterChange(2);
