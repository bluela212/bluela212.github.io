const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
let counterValue = 0;
let licznik = null

function startTimer() {
    console.log('start')
    licznik = setInterval(myTimer, 1000);
}

// ++ dodaje 1 sek
function myTimer() {
    ++counterValue;
    document.getElementById("licznik").innerHTML = counterValue;
}

function stopTimer() {
    console.log('stop')
    clearInterval(licznik);
}

function resetTimer() {
    console.log('reset')
    counterValue = 0;
    document.getElementById("licznik").innerHTML = counterValue;
}

start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)

