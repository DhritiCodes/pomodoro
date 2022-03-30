const longPomodoro = document.querySelector('.long-pmdr');
const shortPomodoro = document.querySelector('.short-pmdr');
const pmdrTimer = document.querySelector('.ongoing-timer');
//toggle b/w screens using display(none/inline) to hide objects 
const first = document.getElementById('first');
const second = document.getElementById('second');
//buttons
var reset = document.querySelector(".reset-btn")
var pause = document.querySelector(".pause-btn")
var resume = document.querySelector(".resume-btn")
var finish = document.querySelector(".finish-btn")
var breakBtn = document.querySelector(".break-btn");
var startingMinutes, minutes, seconds;

var timerInterval;

// 50 min pomodoro
longPomodoro.addEventListener('click', function() {
    startingMinutes = 50;
    time = startingMinutes * 60;

    //switch to timer window
    first.style.display = 'none';
    second.style.display = 'inline';

    //pause button should be displayed at first -  not resume button 
    resume.style.display = "none"
    pause.style.display = "inline";
    console.log(time);

    //finish button should be displayed first, not start break button
    finish.style.display = "inline";
    breakBtn.style.display = "none";

    timerInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pmdrTimer.innerHTML = `${minutes}:${seconds}`;
        time--;
        //stop when timer ends
        if (time < 0) {
            clearInterval(timerInterval);
            //ADD FINISHING EFFECTS + AUDIO


            return;
        }
        // console.log(time);
        //CHANGE 40 => 1000 I.E. 
    }, 1000);
})

//25 min pomodoro
shortPomodoro.addEventListener('click', function() {
    startingMinutes = 1;
    time = startingMinutes * 60;

    //switch to timer window 
    first.style.display = "none";
    second.style.display = "inline";

    timerInterval = setInterval(() => {
        var minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pmdrTimer.innerHTML = `${minutes}:${seconds}`;
        time--;
        //stop when timer ends
        if (time < 0) {
            clearInterval(timerInterval);
            //ADD FINISHING EFFECTS + AUDIO


            return;
        }
        // console.log(time);
    }, 500)
})


//adding button functionality

// RESET BUTTON
reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    second.style.display = 'none';
    first.style.display = 'inline';
})

//PAUSE BUTTON
pause.addEventListener('click', () => {
    console.log("paused");
    pause.style.display = "none";
    resume.style.display = "inline"

    // timerInterval
    clearInterval(timerInterval);
    pmdrTimer.innerHTML = `${Math.floor(time / 60)}:${time%60}`;

})

resume.addEventListener('click', () => {
    console.log("resume");

    timerInterval = setInterval(() => {
        var minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pmdrTimer.innerHTML = `${minutes}:${seconds}`;
        time--;
        //stop when timer ends
        if (time < 0) {
            clearInterval(timerInterval);
            //ADD FINISHING EFFECTS + AUDIO


            return;
        }
        // console.log(time);
    }, 1000)

    resume.style.display = "none"
    pause.style.display = "inline";
})

//finish button to directly end timer, show end screen 
finish.addEventListener("click", () => {
    //once focus session ends, start break and vice versa 
    clearInterval(timerInterval);
    pmdrTimer.innerHTML = "00:00";

    breakBtn.style.display = "inline";
    finish.style.display = "none";

    //disable pause and resume button after finish
    // resume.disabled = "true";
    // pause.disabled = "true"
})

breakBtn.addEventListener("click", () => {
    //display finish button again
    finish.style.display = "inline";
    breakBtn.style.display = "none";
    console.log(time)

    //hardcoded break of 5mins for now ---CHANGE LATER
    startingMinutes = 5;
    time = startingMinutes * 60;

    timerInterval = setInterval(() => {
        var minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pmdrTimer.innerHTML = `${minutes}:${seconds}`;
        time--;
        //stop when timer ends
        if (time < 0) {
            clearInterval(timerInterval);
            //ADD FINISHING EFFECTS + AUDIO
            // console.log("COngratulations, u completed ur goal")

            return;
        }
        // console.log(time);
    }, 1000)
})