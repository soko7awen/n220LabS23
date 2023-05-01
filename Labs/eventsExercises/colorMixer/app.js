//Declare variable for element ColorRect
let colorRect = document.getElementById("ColorRect");
//onclick function
function onClick(event) {
    //Declare variable 'me' for the element that was clicked on
    let me = event.target
    //Declare variables r, g, and b and set them to the corresponding data-attribute
    let r = me.dataset.red
    //Make sure they aren't undefined
    r = r || 0
    let g = me.dataset.green
    g = g || 0
    let b = me.dataset.blue
    b = b || 0
    //Set colorRect's color data-attributes to r, g and b, stop adding after 255
    colorRect.dataset.red = Math.min(parseInt(colorRect.dataset.red)+parseInt(r),255);
    colorRect.dataset.green = Math.min(parseInt(colorRect.dataset.green)+parseInt(g),255);
    colorRect.dataset.blue = Math.min(parseInt(colorRect.dataset.blue)+parseInt(b),255);
    //Set colorRect's background color to be the colors in the dataset
    colorRect.style.backgroundColor = `rgb(${colorRect.dataset.red},${colorRect.dataset.green},${colorRect.dataset.blue})`;
}