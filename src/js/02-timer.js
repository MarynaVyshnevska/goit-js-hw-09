import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputStartDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),

};

const delta = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        // options.defaultDate.getTime() === Date.now
        const delta = selectedDates[0].getTime() - Date.now();
        console.log(delta);
        if (delta < 0) {
            alert("Please choose a date in the future");
            console.log("Please choose a date in the future");
        } else {
            refs.startBtn.setAttribute('isActive', true);
            refs.startBtn.style.backgroundColor = '#62fb8b';
        };
    
  },
};

flatpickr(refs.inputStartDate, options);

refs.startBtn.setAttribute('isActive', false);
refs.startBtn.addEventListener('click', onStartBtn);

function onStartBtn() {
    timer.start();
}

const timer = {

}
function renderingTime() {
    const delta = selecktedTime - new Date();
    // const { days, hours, minutes, seconds } = convertMs(delta);
    // if (seconds < 0) { return; }
    // getEl('[data-days]').textContent = days;
    // getEl('[data-hours]').textContent = hours;
    // getEl('[data-minutes]').textContent = minutes;
    // getEl('[data-seconds]').textContent = seconds;
};






