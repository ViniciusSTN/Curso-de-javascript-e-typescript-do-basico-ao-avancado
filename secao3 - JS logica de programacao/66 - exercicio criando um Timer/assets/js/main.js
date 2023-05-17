const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const stopC = document.querySelector('.stop');
const restart = document.querySelector('.restart');
let seconds = 0;
let timer;

// start.addEventListener('click', () => {
//     clock.classList.remove('stopped');
//     clearInterval(timer);
//     startClock();
// });

// stopC.addEventListener('click', () => {
//     clock.classList.add('stopped');
//     clearInterval(timer);
// });

// restart.addEventListener('click', () => {
//     clock.classList.remove('stopped');
//     clock.textContent = '00:00:00';
//     seconds = 0;
// });

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('start')) {
        clearInterval(timer);
        clock.classList.remove('stopped');
        startClock();
    }
    else if (element.classList.contains('stop')) {
        clock.classList.add('stopped');
        clearInterval(timer);
    }
    else if (element.classList.contains('restart')) {
        clock.classList.remove('stopped');
        clock.textContent = '00:00:00';
        seconds = 0;
    }
});

function setTimeFromSeconds(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        // ou 'UTC'
        timeZone: 'GMT'
    });
}

function startClock() {
    timer = setInterval(() => {
        seconds++;
        clock.textContent = setTimeFromSeconds(seconds);
    }, 1000);
}