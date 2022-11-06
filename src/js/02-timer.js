import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const refs = {
    inputStartDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),

};

let delta = null;
let finishTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        // options.defaultDate.getTime() === Date.now
        delta = selectedDates[0].getTime() - Date.now();
        finishTime = selectedDates[0].getTime();
        // console.log(delta);
        // console.log('finish sale ->', finishTime);
        if (delta < 0) {
            Notiflix.Notify.failure("Please choose a date in the future");
            console.log("Please choose a date in the future");
            refs.startBtn.setAttribute('isActive', false);
            refs.startBtn.style.backgroundColor = '#fafafa';
        } else {
            // refs.startBtn.setAttribute('isActive', true);
            refs.startBtn.style.backgroundColor = '#62fb8b';
        };
   },
};

flatpickr(refs.inputStartDate, options);
refs.startBtn.addEventListener('click', onStartBtn);
refs.inputStartDate.addEventListener('click', onFinish);

function onStartBtn() {
    timer.start();
};

function onFinish() {
    timer.stop();
}

const timer = {
    intervalId: null,
    lostTime: [],
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const delta = finishTime - currentTime;
            refs.startBtn.setAttribute('isActive', false);
            refs.startBtn.style.backgroundColor = '#fafafa';
            // stop Interval
            if (delta <= 0) {
                clearInterval(this.intervalId);
                return
            };

            const lostTime = convertMs(delta);

            refs.days.textContent = addLeadingZero(lostTime.days);
            refs.hours.textContent = addLeadingZero(lostTime.hours);
            refs.minutes.textContent = addLeadingZero(lostTime.minutes);
            refs.seconds.textContent = addLeadingZero(lostTime.seconds);
            console.log(`${addLeadingZero(lostTime.days)}:${addLeadingZero(lostTime.hours)}:${addLeadingZero(lostTime.minutes)}:${addLeadingZero(lostTime.seconds)}`);

        }, 1000);
    },

    stop() {
        if (this.isActive) {
            clearInterval(this.intervalId);
            this.isActive = false;
        } 
        
    }
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
        return String(value).padStart(2, '0');
};






// *******************************************************************

// Репета
// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// class Timer {
//     constructor(onTick) {
//         this.intervalId = null;
//         this.isActive = false;
//         this.onTick = onTick;
//         this.preStart();
//     }

//     // first 00:00:00
//     preStart() {
//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     }

//     start() {
//         if (this.isActive) {
//             return;
//         }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = this.getTimeComponents(deltaTime);
//             this.onTick(time);

//             // console.log(`${month} month ${days} days ${hours}:${mins}:${secs}`);

//             // console.log(pad(new Date(deltaTime).getSeconds()));
//             // console.log(pad(new Date(deltaTime).getMinutes()));
//             // console.log(`
//             //     ${pad(new Date(deltaTime).getHours())}:
//             //     ${pad(new Date(deltaTime).getMinutes())}:
//             //     ${pad(new Date(deltaTime).getSeconds())}
//             // `);
//         }, 1000);
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     }
    
//     // /* принимает числоб приводит к строке,
//     // * - добавляет в начало 0 если число меньше 2-х знаков
//     // / 
//     pad(value) {
//         return String(value).padStart(2, '0');
//     }
    
//     // /* принимает время в миллисекундах
//     // * - высчитывает сколько в них вмещается часов/минут/секунд
//     // * - возвращает объект со свойствами hours, mins, secs
//     // * - копипаста со стека
//     // / 
//     getTimeComponents(time) {
//         const month = this.pad(Math.floor((time % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30)));
//         const days = this.pad(Math.floor((time % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)));
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//         return { month, days, hours, mins, secs };
//     }

// }
// const timer = new Timer({
//     onTick: updateClock,
// });
// // при одновлении текста в одном поле
// function updateClock() {
//     refs.clockFace.textContent = `${month} month ${days} days ${hours}:${mins}:${secs}`;
// }


