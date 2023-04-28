let aHH = new Audio('samples/aHH.wav');
let bHH = new Audio('samples/bHH.wav');
let kick = new Audio('samples/kick.wav');
let rim = new Audio('samples/rim.wav');

function bigPlay(loop,rhythm) {
    for (var i = 0; i <= 15; i++) {
        (function(index) {
            setTimeout(function() {
                if (kick.ended == false) {
                    kick.play(); }
                console.log(index);
            }, i * (1000*sixteenth));
        })(i);
    }
}
