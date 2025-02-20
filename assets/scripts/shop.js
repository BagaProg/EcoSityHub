'use strict'
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
window.addEventListener('click' , event => {
  if (event.target.closest('#basket')) {
    a += 1;
    if (a % 2 == 1) {
      document.querySelector('#basket').removeAttribute('src');
      document.querySelector('#basket').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(a % 2 == 0) {
      document.querySelector('#basket').removeAttribute('src');
      document.querySelector('#basket').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }
  if (event.target.closest('#basket2')) {
    b += 1;
    if (b % 2 == 1) {
      document.querySelector('#basket2').removeAttribute('src');
      document.querySelector('#basket2').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(b % 2 == 0) {
      document.querySelector('#basket2').removeAttribute('src');
      document.querySelector('#basket2').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }if (event.target.closest('#basket3')) {
    c += 1;
    if (c % 2 == 1) {
      document.querySelector('#basket3').removeAttribute('src');
      document.querySelector('#basket3').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(c % 2 == 0) {
      document.querySelector('#basket3').removeAttribute('src');
      document.querySelector('#basket3').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }if (event.target.closest('#basket4')) {
    d += 1;
    if (d % 2 == 1) {
      document.querySelector('#basket4').removeAttribute('src');
      document.querySelector('#basket4').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(d % 2 == 0) {
      document.querySelector('#basket4').removeAttribute('src');
      document.querySelector('#basket4').setAttribute('src' , '../assets/icons/icons8-магазин-35.png');
    }
  }if (event.target.closest('#basket5')) {
    e += 1;
    if (e % 2 == 1) {
      document.querySelector('#basket5').removeAttribute('src');
      document.querySelector('#basket5').setAttribute('src' , '../assets/icons/icons8-shopping-cart-35.png');
    }if(e % 2 == 0) {
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
// document.getElementById("search").addEventListener("input", function() {
//   const wrappers = document.querySelectorAll('.main__wrapper');
//   let filter = this.value.toLowerCase();
//   let items = document.querySelectorAll(".ProductTitle");
//   wrappers.forEach(wrapper => {
//     items.forEach(item => {
//       wrapper.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
//     });
//   });
// });
document.getElementById("search").addEventListener("input", function () {
  let filter = this.value.toLowerCase();
  
  document.querySelectorAll(".main__wrapper").forEach(wrapper => {
    let item = wrapper.querySelector(".ProductTitle");
    let text = item ? item.textContent.toLowerCase() : ""; 
    wrapper.style.display = text.includes(filter) ? "" : "none";
  });
});