// Блокировка скролла
export const bodyLock = (e) => {
  let widthScrollBar = window.innerWidth - document.documentElement.clientWidth;

  document.querySelector('.header').style.paddingRight = widthScrollBar + 'px';
  document.documentElement.style.marginRight = widthScrollBar + 'px';
  document.body.classList.add('_lock');
}

// Удаление блокировки скролла
export const bodyUnLock = (e) => {
  document.documentElement.style.marginRight = '0px';
  document.querySelector('.header').style.paddingRight = '0px';
  document.body.classList.remove('_lock');
}