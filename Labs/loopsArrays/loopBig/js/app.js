// Haven Hamelin
// 02/21/23
// N220

//square = Get element by id "Square"
let square = document.getElementById("Square")

//for loop that starts at 1000, runs when i is less then 5001, and increment by 1000 every time
for (let i=1000; i < 5001; i += 1000) {
    //sets the square innerHTML as i
    square.innerHTML = i
}
