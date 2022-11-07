import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onCreatePromises);
refs.delay.addEventListener('input', onPositiveNumber);
refs.step.addEventListener('input', onPositiveNumber);
refs.amount.addEventListener('input', onPositiveNumber);


function onPositiveNumber(e) {
  if (refs.amount.value < 0 || refs.delay.value < 0 || refs.step.value < 0) {
    Notiflix.Notify.failure('Please, enter a number greater than 0');
  };
};

function onCreatePromises(e) {
  e.preventDefault();

  const formPromise = {
    delay: Number(refs.delay.value),
    step: Number(refs.step.value),
    amount: Number(refs.amount.value),
  };
  // console.log('delay ->', formPromise.delay, 'step ->', formPromise.step, 'amount ->', formPromise.amount);
  for (let i = 1; i <= formPromise.amount; i += 1) {
    const time = formPromise.delay + (formPromise.step * (i - 1));
    // console.log(time)
    setTimeout(() => {
      new Promise(() => {
        console.log(`# ${i} time ${time} created`);
        Notiflix.Notify.success(`Promise ${i} completed in ${time}ms`)
      });
    }, time);
  };
}  
  


// *****Лекция Репеты********
// // *************************
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > .5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)')
//     }
//     reject('промис выполнился с ошибкой (отклонен, rejected)');
//   }, 2000);
// });

// // результат промиса
// // promise.then(onFulfilled, onRejected);
// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`УРА! Получилось ${result}`);
// };
// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`Выполнился с ошибкой. Такое. ${error}`);
// };

// // Цепочки промисов (chaining)
// console.log(promise);
// promise
//   .then(onFulfilled)
//   .then(
//     x => {
//       console.log(x);
//       throw new Error('ошибка непонятно где, но написала во втором')
//     return 5;
//     })
//   .then(
//     y => {
//     console.log(y);
//     })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));
// //******************************* */


// // Промисификация функций
// const makeOrder = (dish) => {
//   const DELAY = 1000;
  
//   return promise = new Promise((resolve, reject) => {
//     const passed = Math.random() > .5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`вот ваше блюдо: ${dish}`);
//       } else {
//         reject('Сорри, закончились продукты');
//       }
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// };

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// *************************************
// // Промисификация синхронных функций

// const makeOrder = dish => {
//   return Promise.resolve(`вот ваше блюдо: ${dish}`);
// };

// makeOrder('пирожок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// };

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// *****************************************

// discription function fetch Возвращает значения промиса
// function fetch(url) {
//   return new Promise(...)
// }

// // Покемоны с https://pokeapi.co/

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(r => r.json());
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(111).then(onFetchSuccess).catch(onFetchError);
// // fetchPokemonById(2);
// // fetchPokemonById(3);


// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess')
//   console.log(pokemon);
// }
// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log(error);
// }

// **********************************************

// //  example
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > .5;
//     setTimeout(() => {
//       if (passed) {
//         resolve('Hi!');
//       }
//       reject('все пропало');
//     }, 2000);
    
    
//   });
// }

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
// ************************************

// // Ипподром

// const horses = [
//   'Secretar',
//   'Eclipse',
//   'Fire',
//   'Chuk',
//   'Ikar',
// ];

// let raceCounter = 0;
// const refs = {
//   startBtn: document.querySelector('.js-race-btn'), 
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// }

// refs.startBtn.addEventListener('click', onStart);

// function onStart() {
//   const promises = horses.map(run);
//   raceCounter += 1;
//   // refs.winnerField.textContent = '';
//   updateWinnerField('');
//   // refs.progressField.textContent = 'Заезд начался, ставки не принимаются';
//   updateProgressField('Заезд начался, ставки не принимаются');
//   // console.log(
//   //   '%c Заезд начался, ставки не принимаются',
//   //   'color: broun; font-size: 14px;',
//   // );
//   determineWinner(promises);
//   waitForAll(promises);
//  };

// function determineWinner(horsesP) {
// // Promise.race([]) для создания первого выполнившегося промиса
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerField(`Победил ${horse}, финишировав за ${time} времени`);
//     // console.log(
//     //   `%c Победил ${horse}, финишировав за ${time} времени`,
//     //   'color: green; font-size: 14px;',
//     // );
//     updateResultsTable({ horse, time, raceCounter});
//   });
// };
 
// function waitForAll(horsesP) {
//     // Promise.all([]) для ожидания всех промисов
//   Promise.all(horsesP).then(() => {
//     // refs.progressField.textContent = `Заезд окончен, принимаются ставки`;
//     updateProgressField(`Заезд окончен, принимаются ставки`);
//     // console.log(
//     //   '%c Заезд окончен, принимаются ставки',
//     //   'color: blue; font-size: 14px;',
//     // );
//   });
//  };

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// };
// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// };

// function updateResultsTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);

// };

// function run(horse) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({horse, time})
//     }, time)
//   })
// };

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
