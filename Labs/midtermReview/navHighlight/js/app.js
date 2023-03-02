// Haven Hamelin
// 03/02/23
// N220

//Create a function "whenClick" that is called onClick
function whenClick(id) {
    //For loop through the available id's
    for (let i=1;i<=6;i++) {
        //set variable "div" to the div with id of i
        let div = document.getElementById(i)
        //if i is not the id, then clear color and bold
        if (i != id) {
            div.style.backgroundColor = "gray";
            div.style.fontWeight = "normal";
        }
        //if i and id are the same, then set color and bold
        else {
            div.style.backgroundColor = "blue";
            div.style.fontWeight = "bold";
            document.getElementById("topText").innerHTML = div.innerHTML
        }
    }
}