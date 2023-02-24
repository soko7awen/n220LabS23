// Haven Hamelin
// 02/21/23
// N220

//square = Get element by id "Square"
let square = document.getElementById("Square")

//create an array 'favorites' with strings of favorite things
let favorites = ["Computers", "Sunlight", "Water", "Comics", "Friends"]

//for loop that starts at 0 and runs when i is less than favorites.length, and increments by one
for (let i=0;i<favorites.length;i++) {
    //appned to square's innerHTML with the value at i + ", is one of my favorite things"
    square.innerHTML += favorites[i] + ", is one of my favorite things" + "<br>"
}