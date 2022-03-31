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



startingMinutes = 25;
time = startingMinutes * 60;

//25 min pomodoro
shortPomodoro.addEventListener('click', function() {

    //switch to timer window 
    first.style.display = "none";
    second.style.display = "inline";

    executeTimer();
})

//adding button functionality

// RESET BUTTON
reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    second.style.display = 'none';
    first.style.display = 'inline';
    startingMinutes = 25;
    time = startingMinutes * 60;
})

//PAUSE BUTTON
pause.addEventListener('click', () => {
    console.log("paused");
    pause.style.display = "none";
    resume.style.display = "inline"

    // timerInterval
    clearInterval(timerInterval);
    pmdrTimer.innerHTML = `${Math.floor(time / 60)}:${time%60}`;
    console.log(time);
})

//RESUME BUTTON
resume.addEventListener('click', () => {
    console.log("resume");

    executeTimer();

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

    //when finished, options -  start break or reset timer, DISABLE RESUME AND PAUSE BUTTON, AGAIN TURN DISABILITY OFF WHEN STARTING POMODORO
    pause.disabled = true;
    resume.disabled = true;
    startingMinutes = 25;
    time = startingMinutes * 60;

    // //break-finish  audio
    // var audio = new Audio('break-finish.mp3');
    // audio.play();

    console.log("finished");
})


breakBtn.addEventListener("click", () => {
    //display finish button again
    finish.style.display = "inline";
    breakBtn.style.display = "none";
    console.log(time)

    //hardcoded break of 5mins for now ---CHANGE LATER
    startingMinutes = 5;
    time = startingMinutes * 60;
    executeTimer();

})

//functions 

// 1.EXECUTE TIMER 
function executeTimer() {
    timerInterval = setInterval(() => {
        var minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        pmdrTimer.innerHTML = `${minutes}:${seconds}`;
        time--;
        console.log(time)
            //stop when timer ends
        if (time < 0) {
            clearInterval(timerInterval);
            //ADD FINISHING EFFECTS + AUDIO
            var audio = new Audio('timer-finish.mp3');
            audio.play();
            return;
        }

        //REMOVE DISABILITY WHICH WAS ENABLED WHEN POMODORO "FINISHED"
        pause.disabled = false;
        resume.disabled = false;

        breakBtn.style.display = "none";
        finish.style.display = "inline";
        // finish.innerHTML = "FINISH POMODORO"

        resume.style.display = "none"
        pause.style.display = "inline";

    }, 1000)
}

// function animation