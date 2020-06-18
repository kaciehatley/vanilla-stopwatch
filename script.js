let milli = 00;
let seconds = 00;
let minutes = 00;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let minutesText = document.getElementById("minutesText");
let secondsText = document.getElementById("secondsText");
let milliText = document.getElementById("milliText");

// Set Timer To Zero On Load
window.onload = function() {
    minutesText.innerHTML="00";
    secondsText.innerHTML="00";
    milliText.innerHTML="00";
}

// Timer Begins When "Start" Is Clicked
start.addEventListener("click", function() {
    let timer = window.setInterval(function(){
        milli += 01;
        milliText.innerHTML = milli;
        if (seconds==10 && milli==99) {
            seconds = 00;
            minutes+=1;
            minutesText.innerHTML = minutes;
        }
        if (milli==99) {
            milli = 00;
            seconds+=1;
            secondsText.innerHTML = seconds;
        }
    },10) 

// Timer Stops When "Stop" Is Clicked
stop.addEventListener("click", function(){
        clearInterval(timer);
    });
})

// Set Timer To Zero When "Reset" Is Clicked
reset.addEventListener("click", function() {
    minutesText.innerHTML="00";
    secondsText.innerHTML="00";
    milliText.innerHTML="00";
})

