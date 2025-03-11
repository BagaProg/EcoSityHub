'use strict'
window.addEventListener('click' , event => {
  if (event.target.closest('.header__user')){
    document.querySelector('.aside').classList.add('active');
  }if (event.target.closest('.aside__cancel') || !event.target.closest('.header__user') && !event.target.closest('.aside')){
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
document.addEventListener('DOMContentLoaded' , () => {
  const form = document.getElementById('main__form');
  form.addEventListener('submit' , formSend);
  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    formData.append('image' , formImage.files[0]);
    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('pages/sendmail.php' , {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = ``;
        form.reset();
        form.classList.remove('_sending');
      }else {
        alert('Error');
        form.classList.remove('_sending');
      }
    }else {
      alert('Complete the mandatory fields');
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;

      }else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  const formImage = document.getElementById("formImage");
  const formPreview = document.getElementById('formPreview');
  const formPrev = document.getElementById('formPrev');
  formImage.addEventListener('change' , () => {
    uploadFile(formImage.files[0]);
  });
  function uploadFile(file) {
    if (!['image/jpeg' , 'image/png' , 'image/gif'].includes(file.type)) {
      alert('Only images are allowed');
      formImage.value = '';
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("The file must not be less than 2MB");
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo" style="width: 100%; height: 100%; z-index: 2;">`;
      formPrev.innerHTML = `<img src="${e.target.result}" alt="Photo" style="width: 100%; height: 100%; z-index: 2;">`;
    };
    reader.onerror = e => {
      alert('Error');
    }
    reader.readAsDataURL(file);
  }
});