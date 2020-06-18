let milli = 00;
let seconds = 00;
let minutes = 00;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let minutesText = document.getElementById("minutesText");
let secondsText = document.getElementById("secondsText");
let milliText = document.getElementById("milliText");

// window.onload = function() {
//     minutesText.innerHTML="00";
//     secondsText.innerHTML="00";
//     milliText.innerHTML="00";
// }


start.addEventListener("click", function() {
    minutesText.innerHTML="00";
    secondsText.innerHTML="00";
    milliText.innerHTML="01";
})

