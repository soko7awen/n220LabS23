//Declar variable for Answer div
let answer = document.getElementById("Answer");
//onclick function
function onClick(event) {
    //Declare variable 'me' equal to the div that was clicked on
    me = event.target
    //Set the answer div's innerHTML to "Answer: " plus the data-attribute 'answer' from the element that was clicked on
    answer.innerHTML = "Answer: " + me.dataset.answer
}