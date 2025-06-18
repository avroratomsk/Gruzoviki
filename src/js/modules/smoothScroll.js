import {bodyUnLock} from './baseFunctions.js';

const links = document.querySelectorAll('[data-anchor]');
const isMainPage = window.location.pathname === '/';

// Функция для плавного скролла к элементу
const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    let elementPosition = element.getBoundingClientRect().top + window.scrollY;

    if (document.documentElement.classList.contains('_touch')) {
      elementPosition =
        elementPosition - document.querySelector('header.header').clientHeight;
    }

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
};

// Обработка кликов на ссылки
links?.forEach((link) => {
  const anchor = link.dataset.anchor;

  link.addEventListener('click', (event) => {
    if (anchor) {
      scrollToElement(anchor);
    }
  });
});

// Скроллим к секции после полной загрузки страницы
if (isMainPage) {
  const savedAnchor = localStorage.getItem('scrollToSection');
  if (savedAnchor) {
    window.addEventListener('load', () => {
      localStorage.removeItem('scrollToSection'); // Очищаем после использования
      scrollToElement(savedAnchor);
    });
  }
}

// Обработчик кликов вне элемента
export function clickOut() {
  document.addEventListener('mouseup', function (e) {
    let modalWindow = document.querySelector('.modal.open .window');

    if (modalWindow) {
      if (!modalWindow.contains(e.target)) {
        modalWindow.closest('.modal').classList.remove('open');
        document.querySelector('html').classList.remove('_lock');
      }
    }
  });
}
