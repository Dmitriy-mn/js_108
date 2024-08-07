/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const DELAY = 3000;
let timerId = null;
const notification = document.querySelector('.js-alert');
notification.addEventListener('click', handleClick);

showNotification();

function handleClick() {
  hideNotification();
  clearTimeout(timerId);
}

function showNotification() {
  notification.classList.add('is-visible');

  timerId = setTimeout(() => {
    console.log('hide');

    hideNotification();
  }, DELAY);
}

function hideNotification() {
  notification.classList.remove('is-visible');
}
