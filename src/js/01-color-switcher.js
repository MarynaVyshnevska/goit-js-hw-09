const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    styleWindow: document.querySelector('body'),
};

const TIMER = 1000;

refs.startBtn.addEventListener('click', () => {
    changeColor.start();
});
refs.stopBtn.addEventListener('click', () => {
    changeColor.stop();
});

const changeColor = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(getRandomHexColor, TIMER);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        refs.startBtn.style.backgroundColor = '#fafafa';
        refs.stopBtn.style.backgroundColor = refs.styleWindow.style.backgroundColor;
    },
  
};

function getRandomHexColor() {
    const newColor = '#' + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)
            .toLowerCase();
    console.log('new Background color:', newColor);
    refs.styleWindow.style.backgroundColor = newColor;
    refs.startBtn.style.backgroundColor = newColor;
    refs.stopBtn.style.backgroundColor = '#fafafa';
};


