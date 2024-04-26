var hourheading = document.getElementById('hours');
var minuteheading = document.getElementById('minute');
var secondheading = document.getElementById('seconds');
var msecheading = document.getElementById('msec');

var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval;

function timer() {
    msec++
    msecheading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secondheading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minuteheading.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60) {
        hrs++;
        hourheading.innerHTML = hrs;
        min = 0;
    }
}

function start() {
    var btn = document.getElementById('btn-start');
    interval = setInterval(timer, 10);
    btn.disabled = true
}

function pause() {
    var btn = document.getElementById("btn-start");
    clearInterval(interval);
    btn.disabled = false;
}

function reset() {
    var hrs = 0;
    var min = 0;
    var sec = 0;
    var msec = 0;
    hourheading.innerHTML = hrs;
    minuteheading.innerHTML = min;
    secondheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    pause();
}