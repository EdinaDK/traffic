let speed = 1000;
let i = 0;
const r = document.getElementById("r");
const y = document.getElementById("y");
const g = document.getElementById("g");
const audio = new Audio("./Rick_Astley_-_Never_Gonna_Give_You_Up_(musmore.com).mp3");
document.getElementById("play").addEventListener("click", () => {
    audio.play();
});

timerId = setInterval(() => {
    changer();
}, speed);

function changer() {
    if (i === 0) {
        r.classList.add('red');
        y.classList.remove('yellow');
        g.classList.remove('green');
    } else if (i === 1 || i === 3) {
        r.classList.remove('red');
        y.classList.add('yellow');
        g.classList.remove('green');
    } else if (i === 2) {
        r.classList.remove('red');
        y.classList.remove('yellow');
        g.classList.add('green');
    }

    if (i <= 3) {
        i++;0
    } else {
        i = 0;
    }
}


