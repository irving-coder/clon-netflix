'use strict';

(function(){
  let inputEmail = document.querySelector('[name="email"]');
  let labelEmail = document.querySelector('[for="email"]');

  inputEmail.addEventListener('click', () => {
    labelEmail.style.marginTop = '10px';
    labelEmail.style.fontSize = '10px';
  });

  inputEmail.addEventListener('blur', () => {
    labelEmail.style.marginTop = '25px';
    labelEmail.style.fontSize = '15px';
  });

  /* Falta alinear botón con input */
})();