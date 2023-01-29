let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let stopwatch = document.querySelector('.stopwatch');
let second = 0;
let hundredOfSecond = 0;
let timer;
// let minute = 0;
let isTimer = false;

function timerFunction() {
    timer = setInterval(function() {
        hundredOfSecond++;
        if (hundredOfSecond >= 60) {
            hundredOfSecond = '0';
            second++;
        }
        if (hundredOfSecond < 10) {
            hundredOfSecond = "0" + hundredOfSecond;
        }
        stopwatch.innerHTML = second + ' : ' + hundredOfSecond;
        if (second < 10) {
            stopwatch.innerHTML = "0" + second + ' : ' + hundredOfSecond;
        }
        // if (second >= 60) {
        //     minute++;
        //     second = 0;
        //     stopwatch.innerHTML = minute + " : " + second + ' : ' + hundredOfSecond;
        // }
        // if (minute < 10) {
        //     stopwatch.innerHTML = "0" + minute + " : " + second + ' : ' + hundredOfSecond;
        // } else {
        //     stopwatch.innerHTML = minute + " : " + second + ' : ' + hundredOfSecond;
        // }

    }, 1 / 1000);
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
    second = 0;
    hundredOfSecond = 0;
    Stop();
    stopwatch.innerHTML = "00 : 00";
}
btnStart.addEventListener('click', Start);
btnStop.addEventListener('click', Stop);
btnReset.addEventListener('click', Reset);