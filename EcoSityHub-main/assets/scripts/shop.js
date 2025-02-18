'use strict'
let n = 0;
window.addEventListener('click' , event => {
  if (event.target.closest('#basket')) {
    n += 1;
    if (n % 2 == 1) {
      document.querySelector('#basket').removeAttribute('src');
      document.querySelector('#basket').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(n % 2 == 0) {
      document.querySelector('#basket').removeAttribute('src');
      document.querySelector('#basket').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }
});
window.addEventListener('click' , event => {
  if (event.target.closest('#basket2')) {
    n += 1;
    if (n % 2 == 1) {
      document.querySelector('#basket2').removeAttribute('src');
      document.querySelector('#basket2').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(n % 2 == 0) {
      document.querySelector('#basket2').removeAttribute('src');
      document.querySelector('#basket2').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }
});
window.addEventListener('click' , event => {
  if (event.target.closest('#basket3')) {
    n += 1;
    if (n % 2 == 1) {
      document.querySelector('#basket3').removeAttribute('src');
      document.querySelector('#basket3').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(n % 2 == 0) {
      document.querySelector('#basket3').removeAttribute('src');
      document.querySelector('#basket3').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }
});
window.addEventListener('click' , event => {
  if (event.target.closest('#basket4')) {
    n += 1;
    if (n % 2 == 1) {
      document.querySelector('#basket4').removeAttribute('src');
      document.querySelector('#basket4').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(n % 2 == 0) {
      document.querySelector('#basket4').removeAttribute('src');
      document.querySelector('#basket4').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }
});
window.addEventListener('click' , event => {
  if (event.target.closest('#basket5')) {
    n += 1;
    if (n % 2 == 1) {
      document.querySelector('#basket5').removeAttribute('src');
      document.querySelector('#basket5').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(n % 2 == 0) {
      document.querySelector('#basket5').removeAttribute('src');
      document.querySelector('#basket5').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }
});
window.addEventListener('click' , event => {
  if (event.target.closest('.header__user')){
    document.querySelector('.aside').classList.add('active');
  }if (!event.target.closest('.header__user') && !event.target.closest('.aside')){
    document.querySelector('.aside').classList.remove('active');
  }
});