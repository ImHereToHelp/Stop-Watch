//UI Elements
const timer = document.querySelector(".timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let elapsedTime = 0;
let startTime = 0;
let clock;

startBtn.addEventListener('click', startStopWatch);
pauseBtn.addEventListener('click', pauseStopWatch);
resetBtn.addEventListener('click', resetStopWatch);


function startStopWatch() {
    startTime = Date.now() - elapsedTime;
    clock = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timer.innerText = `${printTime(elapsedTime)}`;
    })
}

function pauseStopWatch() {
    clearInterval(clock);
}

function resetStopWatch() {
    elapsedTime = 0;
    pauseStopWatch();
    timer.innerText = `00:00:00`;
}

function printTime(elapsedTime) {
    let { minutes, seconds, miliseconds } = 0;
    minutes = Math.floor(elapsedTime / 60000).toString().padStart(2,'0');
    seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2,'0');
    miliseconds = Math.floor((elapsedTime) % 100).toString().padStart(2,'0');

    return `${minutes}:${seconds}:${miliseconds}`;
}
