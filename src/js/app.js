import * as functions from './modules/baseFunctions.js';

functions.isWebp();


const indicator = document.querySelector('#active-element');
const truckNavElement = document.querySelectorAll('.truck__nav-item');

function moveIndicator(el) {
  const { offsetLeft, offsetWidth } = el;
  indicator.style.left = offsetLeft + 'px';
  indicator.style.width = offsetWidth + 'px';
}

truckNavElement?.forEach(el => {
  el.addEventListener('click', () => {
    truckNavElement.forEach((el) => {el.classList.remove('_active');});
    el.classList.add('_active');
    moveIndicator(el);
  });
})

window.addEventListener('DOMContentLoaded', () => {
  if(truckNavElement[0]) {
    moveIndicator(truckNavElement[0]);
  }
})