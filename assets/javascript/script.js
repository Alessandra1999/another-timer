let interval;
let isRunning = false;

let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let stopBtn = document.getElementById('stop');
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let display = document.getElementById('display');
let alarmSound = document.getElementById('clock-alarm');

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    display.innerHTML = 'horas : minutos : segundos'

    interval = setInterval(() => {
        let hours = parseInt(hoursInput.value);
        let minutes = parseInt(minutesInput.value);
        let seconds = parseInt(secondsInput.value);

        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
        } else {
            pauseTimer();
            alarmSound.play();
            display.innerHTML = 'O TEMPO ACABOU!!!';
        }

        hoursInput.value = twoDigits(hours);
        minutesInput.value = twoDigits(minutes);
        secondsInput.value = twoDigits(seconds);

    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}

function stopTimer() {
    pauseTimer();
    display.innerHTML = 'horas : minutos : segundos'
    hoursInput.value = '00';
    minutesInput.value = '00';
    secondsInput.value = '00';
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

function twoDigits(digit) {
    if (digit < 10) {
        return('0' + digit);
    } else {
        return(digit);
    }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);