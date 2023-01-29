let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let stopwatch = document.querySelector('.stopwatch');
let timer;
let hundredOfSecond = '00';
let second = '00';
let minute = '00';
let hour = '00';
let isTimer = false;

function timerFunction() {
    timer = setInterval(function() {
        hundredOfSecond++;
        hundredOfSecond < 10 ? hundredOfSecond = '0' + hundredOfSecond : "";
        if (hundredOfSecond >= 100) {
            hundredOfSecond = 0;
            second++;
            second < 10 ? second = '0' + second : "";
        }
        if (second >= 60) {
            second = 0;
            minute++;
            minute < 10 ? minute = '0' + minute : "";
        }
        if (minute >= 60) {
            minute = 0;
            hour++;
            hour < 10 ? hour = '0' + hour : "";
        }
        stopwatch.innerHTML = minute + " : " + second + " . " + hundredOfSecond;
        hour > 0 ? stopwatch.innerHTML = hour + " : " + minute + " : " + second + " . " + hundredOfSecond : '';
    }, 1);
};

function Start() {
    if (isTimer == false) {
        timerFunction();
        isTimer = true;
    }
}

function Stop() {
    isTimer = false;
    clearInterval(timer);
}

function Reset() {
    hour = "00";
    minute = "00";
    second = "00";
    hundredOfSecond = "00";
    Stop();
    stopwatch.innerHTML = "00 : 00 . 00";
}
btnStart.addEventListener('click', Start);
btnStop.addEventListener('click', Stop);
btnReset.addEventListener('click', Reset);