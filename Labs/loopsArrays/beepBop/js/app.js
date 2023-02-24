// Haven Hamelin
// 02/21/23
// N220

//square = Get element by id "Square"
let square = document.getElementById("Square")

//for loop that starts at 1, runs when i is less then 26, and increment by one every time
for (let i=1;i<26;i++) {
    //if i%3==0 and i%5==0
    if (i%3==0 && i%5==0) square.innerHTML += "beepbop" + "<br>"
        //set square's innerHTML to beepbop
    //else if i%5==0
    else if (i%5==0) square.innerHTML += "bop" + "<br>"
        //set square's innerHTML to bop
    //else if i%3==0
    else if (i%3==0) square.innerHTML += "beep" + "<br>"
        //set square's innerHTML to beep
    else square.innerHTML += i + "<br>"

}