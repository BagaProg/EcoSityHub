'use strict'
window.addEventListener('click' , event => {
  if (event.target.closest('.header__user')){
    document.querySelector('.aside').classList.add('active');
  }if (!event.target.closest('.header__user') && !event.target.closest('.aside')){
    document.querySelector('.aside').classList.remove('active');
  }
});
const body = document.querySelector('.body');
const bank = document.querySelector('.wrapper');
window.addEventListener('click' , event => {
    if(event.target.closest('.aside__user_money')) {
        bank.classList.remove('hidden');
        body.classList.add('active')
    }if(!event.target.closest('.aside__user_money') && !event.target.closest('.wrapper')) {
        bank.classList.add('hidden');
        body.classList.remove('active')
    }
});