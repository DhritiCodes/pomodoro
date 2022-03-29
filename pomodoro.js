const longPomodoro = document.querySelector(".long-pmdr");
const shortPomodoro = document.querySelector(".short-pmdr");
const pmdrTimer = document.querySelector(".ongoing-timer");
const first = document.getElementById("first");
const second = document.getElementById("second");
const startBtn = document.querySelector("start-btn");
var startingMinutes;
var time = startingMinutes * 60;



longPomodoro.addEventListener("click", function(time) {
    startingMinutes = 50;

    //switch to timer window 
    first.style.display = "none";
    second.style.display = "inline";
    console.log(time);


    setInterval(updateCountdown(time), 1000);
})

function updateCountdown(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    pmdrTimer.innerHTML = `${minutes}:${seconds}`;
    time--;
    console.log("workingggggg")
}




shortPomodoro.addEventListener("click", function() {
    startingMinutes = 25;

    //switch to timer window 
    first.style.display = "none";
    second.style.display = "inline";
    setInterval(updateCountdown, 1000);
})