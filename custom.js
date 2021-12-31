function setCurrentTone(value) {
    document.getElementById('current-tone').innerText = value;
}

function init() {
    document.addEventListener('keypress', e => {
        if (e.key === ' ') {
            setCurrentTone('?');
            const max = parseInt(document.getElementById('max-tone').value);
            const num = Math.floor(Math.random() * (max + 1));
            press(num);
            setTimeout(() => setCurrentTone(num), 1000);
        } else {
            setCurrentTone(e.key);
            press(e.key);
        }
    });

    var pressing=false;
    function press(num) {
        var buttons = document.querySelectorAll('table button');
        var button = Array.from(buttons).find(button => button.innerText == num);
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
}

init();
document.addEventListener('load', init);
