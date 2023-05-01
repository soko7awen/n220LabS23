//Satisfyingly short function
function onClick(event) {
    let me = event.target
    //Sets background color to value of data attribute of 'color'
    me.style.backgroundColor = me.dataset.color;
}