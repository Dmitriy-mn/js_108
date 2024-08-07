/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

// const startBtn = document.querySelector('button[data-action-start]');
// const stopBtn = document.querySelector('button[data-action-stop]');
// const clockFace = document.querySelector('.clockface');

// class Timer {
//   constructor({ onTick }) {
//     this.isActive = false;
//     this.onTick = onTick;
//     this.intervalId = null;

//     this.init();
//   }

//   init() {
//     const time = this.getTime(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();

//       const deltaTime = currentTime - startTime;
//       const time = this.getTime(deltaTime);
//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTime(0);
//     this.onTick(time);
//   }

//   getTime(value) {
//     const hours = this.pad(
//       Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((value % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((value % (1000 * 60)) / 1000));
//     return { hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClock,
// });

// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClock({ hours, mins, secs }) {
//   clockFace.textContent = `${hours}:${mins}:${secs}`;
// }

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockFace = document.querySelector('.clockface');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

let isActive = false;
let intervalId = null;

init();

function init() {
  const time = getTime(0);
  updateClock(time);
}

function start() {
  if (isActive) {
    return;
  }
  const startTime = Date.now();
  isActive = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();

    const deltaTime = currentTime - startTime;
    const time = getTime(deltaTime);
    updateClock(time);
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
  isActive = false;
  const time = getTime(0);
  updateClock(time);
}

function getTime(value) {
  const hours = pad(
    Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((value % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((value % (1000 * 60)) / 1000));
  return { hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClock({ hours, mins, secs }) {
  clockFace.textContent = `${hours}:${mins}:${secs}`;
}
