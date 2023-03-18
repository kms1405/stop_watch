

// variables to show to time
var minutes=0
var seconds=0
var time_out = null

function start_timer() {
    seconds= seconds + 1
    if (seconds < 10) {
        show_second = `0${seconds}`
    } else {
        show_second =seconds
    }

    // minutes calculater
    if (seconds === 60) {
        minutes = minutes + 1
        seconds=0
        show_second = `0${seconds}`
    }

    if (minutes < 10) {
        show_minute = `0${minutes}`
    } else {
        show_minute =minutes
    }

    // To show dynamic timer count
    window.document.getElementById("stopwatch").innerHTML=`${show_minute}:${show_second}`;
    
}



function start(){
    // To start the timer if start button value is "start"
    var start_button=window.document.getElementById("start")
    if (start_button.value === "start"){
        start_button.style.background = 'grey';
        start_button.value="pause";
        start_button.innerHTML = "Pause";
        time_out = window.setInterval(start_timer, 1000)}

    // To pause the timer if start button value is "pause"
    else {
        console.log("else condition");
        window.clearInterval(time_out);
        start_button.style.background = 'green';
        start_button.value="start";
        start_button.innerHTML = "Start";
    }
}

// To reset the timer
function reset(){
    window.clearInterval(time_out)
    minutes=0
    seconds=0
    window.document.getElementById("stopwatch").innerHTML=`00:00`;
    var start_button=window.document.getElementById("start");
    start_button.style.background = 'green';
    start_button.value="start";
    start_button.innerHTML = "Start";
}



