const longPomodoro = document.querySelector('.long-pmdr');
const shortPomodoro = document.querySelector('.short-pmdr');
const pmdrTimer = document.querySelector('.ongoing-timer');
const first = document.getElementById('first');
const second = document.getElementById('second');
const startBtn = document.querySelector('start-btn');
var startingMinutes;
var time = startingMinutes * 60;

// 50 min pomodoro
longPomodoro.addEventListener('click', function() {
    startingMinutes = 50;
    time = startingMinutes * 60;

    //switch to timer window
    first.style.display = 'none';
    second.style.display = 'inlinegut';

    setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pmdrTimer.innerHTML = `${minutes}:${seconds}`;
        time--;
    }, 1000);
});

//25 min pomodoro
shortPomodoro.addEventListener('click', function() {
    startingMinutes = 25;
    time = startingMinutes * 60;

    //switch to timer window 
    first.style.display = "none";
    second.style.display = "inline";
    console.log(time);


    setInterval(() => {
        var minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pmdrTimer.innerHTML = `${minutes}:${seconds}`;
        time--;
    }, 1000)
})