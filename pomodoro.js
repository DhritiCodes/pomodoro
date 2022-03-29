const longPomodoro = document.querySelector(".long-pmdr");
const shortPomodoro = document.querySelector(".short-pmdr");
const pmdrTimer = document.querySelector(".ongoing-timer");
const first = document.getElementById("first");
const second = document.getElementById("second");
const startBtn = document.querySelector("start-btn");
var startingMinutes;

longPomodoro.addEventListener("click", function() {
            startingMinutes = 50;
            let time = startingMinutes * 60;

            //switch to timer window 
            first.style.display = "none";
            second.style.display = "inline";

            setInterval(updateCountdown, 1000);


            shortPomodoro.addEventListener("click", function() {
                startingMinutes = 25;
                let time = startingMinutes * 60;

                //switch to timer window 
                first.style.display = "none";
                second.style.display = "inline";
                setInterval(updateCountdown, 1000);
            })

            function updateCountdown(time) {
                const minutes = Math.floor(time / 60);
                var seconds = time % 60;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                pmdrTimer.innerHTML = `${minutes}:${seconds}`;
                time--;
                console.log("workingggggg")
            }