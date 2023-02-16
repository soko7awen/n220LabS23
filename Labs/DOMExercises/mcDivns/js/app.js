// Haven Hamelin
// 02/16/23
// N220

let mcDiv = document.getElementById("McDiv")

mcDiv.style.backgroundColor = "red";
mcDiv.style.color = "white";
mcDiv.style.width = 100 + "px";
mcDiv.style.height = 100 + "px";
mcDiv.style.wordBreak = "break-all";



function mcIfy() {
    mcDiv.innerHTML += "mc";
}