import * as functions from './modules/baseFunctions.js';

functions.isWebp();


const indicator = document.querySelector('#active-element');
const truckNavElement = document.querySelectorAll('.truck__nav-item');

function moveIndicator(el, nameIndiator) {
  const { offsetLeft, offsetWidth } = el;
  nameIndiator.style.left = offsetLeft + 'px';
  nameIndiator.style.width = offsetWidth + 'px';
}

truckNavElement?.forEach(el => {
  el.addEventListener('click', () => {
    truckNavElement.forEach((el) => {el.classList.remove('_active');});
    el.classList.add('_active');
    moveIndicator(el, indicator);
  });
})



const optionBtns = document.querySelectorAll('.wheelbase__option');
const indicatorOption = document.querySelector('.wheelbase__indicator');

optionBtns?.forEach((btn) => {
  btn.addEventListener('click', () => {
    optionBtns.forEach((el) => {el.classList.remove('_active');});
    btn.classList.add('_active');
    moveIndicator(btn, indicatorOption);

    let fields = [
      "length", "width", "height", "weight", "lifting", "structure", "structure",
      "structurewidth", "structureheight", "volume", "pallets", "capacity",
    ]
    const imageEl = document.getElementById("image");
    const sourceEl = imageEl?.previousElementSibling?.tagName === "SOURCE"
      ? imageEl.previousElementSibling
      : imageEl?.parentElement?.querySelector("source");
    fields.forEach((field) => {
      const value = btn.dataset[field];
      const el = document.getElementById(field);

      if(el) {
        if(field === "image"){
          console.log(value)
          el.src = value
        }else {
          el.innerText = value;
        }
      }
    })

    const imagePath = btn.dataset.image;
    if (imageEl && sourceEl && imagePath) {
      imageEl.src = imagePath;
      sourceEl.srcset = imagePath;
    }


  })
})

window.addEventListener('DOMContentLoaded', () => {
  if(truckNavElement[0]) {
    moveIndicator(truckNavElement[0], indicator);
  }

  if(optionBtns[0]) {
    moveIndicator(optionBtns[0], indicatorOption);
  }

})

const burgerBtn = document.querySelector('.burger');

burgerBtn?.addEventListener('click', () => {
  document.querySelector('.nav').style.display = 'flex';
})


const closeBtn = document.querySelector('.close');

closeBtn?.addEventListener('click', () => {
  document.querySelector('.nav').style.display = 'none';
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});