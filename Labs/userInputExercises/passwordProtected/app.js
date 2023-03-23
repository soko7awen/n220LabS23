//Add variables for relevant DOM elements
let username = document.getElementById("Username")
let password = document.getElementById("Password")
let div = document.getElementById("Div")


//Define passwordCheck function
function passwordCheck() {
    //Check if value of username and value of password are correct, if so change div's innerHTML to "Success", othewise change to "Wrong Information"
    if (username.value=="Username" && password.value=="Password") div.innerHTML="Success"
    else div.innerHTML="Wrong information"

}