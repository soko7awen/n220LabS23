// Haven Hamelin
// 02/21/23
// N220

//square = Get element by id "Square"
let square = document.getElementById("Square")
//squareTwo = Get element by id "SquareTwo"
let squareTwo = document.getElementById("SquareTwo")
square.style.backgroundColor = "silver"
squareTwo.style.backgroundColor = "brown"
squareTwo.style.color = "white"


//create an array 'times' with the times, from lowest to highest
let times = [1.2,3.4,5.8]

//set square's innerHTML to the 2nd to last value in times
square.innerHTML = times[times.length-2]
//set squareTwo's innerHTML to the last value in times
squareTwo.innerHTML = times[times.length-1]
