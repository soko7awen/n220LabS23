//Create variables for relevant DOM elements
let input = document.getElementById("Input");
let div = document.getElementById("Div");

//function called by onlick
function onClick() {
    //Variable for the value of input
    let val = input.value;
    //Sets the innerHTML of div to the cleaned version of val
    div.innerHTML = cleanup(val);
}

//Function that cleans the string it is given
function cleanup(str) {
    var newStr = "";
    //For loop that loops through every character and appends any character that is not # to a new string
    for (var i = 0; i < str.length; i++) {
      if (str[i] != "#") {
        newStr += str[i];
      }
    }
    //Returns resultant string
    return newStr;
}