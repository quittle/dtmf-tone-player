function setCurrentTone(value) {
    document.getElementById('current-tone').innerText = value;
}

let pressing=false;
function press(num) {
    const buttons = document.querySelectorAll('table button');
    const button = Array.from(buttons).find(button => button.innerText == num);
    if (button == null || pressing) {
        return;
    }
    pressing = true;
    button.onmousedown();
    setTimeout(() => {
        button.onmouseup();
        pressing = false;
    }, 1000);
}

function onPracticeSubmit(e) {
    e.preventDefault();

    playRandom();
}

function playRandom() {
    setCurrentTone('?');
    const max = parseInt(document.getElementById('max-tone').value);
    const num = Math.floor(Math.random() * (max + 1));

    press(num);
    setTimeout(() => setCurrentTone(num), 1000);
}

function init() {
    document.addEventListener('keypress', e => {
        const key = e.key.toLocaleUpperCase('en-US');
        if (key === ' ' || key === 'ENTER') {
            playRandom();
        } else {
            setCurrentTone(key);
            press(key);
        }
    });

    document.addEventListener('click', e => {
        const button = e.target;
        if (button) {
            press(button.innerText);
        }
    });
}

init();
