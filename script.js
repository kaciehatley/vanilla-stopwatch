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
    // Code is repeated every 10 milliseconds
    let timer = window.setInterval(function(){
        // function updateWatch(variable, element) {
        //     variable +=1;
        //     if(variable.toString().length<2) {
        //         element.innerHTML="0"+variable;
        //         console.log("if statement");
        //     }
        //     else {
        //         element.innerHTML=variable;
        //         console.log("else statement");
        //     }
        // }
        // updateWatch(milli, milliText);

        // if (milli==99) {
        //     milli = 00;
        //     updateWatch(seconds,secondsText);
        // }

        // if (seconds==10 && milli==99) {
        //     seconds = 00;
        //     updateWatch(minutes, minutesText);
        // }

        // Add one hundredth of a second
        milli += 1;

        // // If milliseconds are only one digit long, add 0 to beginning
        if (milli.toString().length < 2) {
            milliText.innerHTML = "0"+milli;
        }
        // // If milliseconds are two digits long, update DOM and continue
        if (milli.toString().length == 2) {
            milliText.innerHTML = milli;
        }

        // Add minute after 00:59:99
        if (seconds==9 && milli==99) {
            seconds=00;
            minutes+=1;
            minutesText.innerHTML = minutes;
        }

        // If there are 99/100 of a second, add unit to seconds
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

