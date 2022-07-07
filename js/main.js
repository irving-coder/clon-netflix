'use strict';

(function(){
  let inputEmail = document.querySelector('[name="email"]');
  let labelEmail = document.querySelector('[for="email"]');
  const loguito = document.querySelector('#loguito');

  inputEmail.addEventListener('click', () => {
    labelEmail.style.marginTop = '10px';
    labelEmail.style.fontSize = '10px';
  });

  inputEmail.addEventListener('blur', () => {
    labelEmail.style.marginTop = '25px';
    labelEmail.style.fontSize = '15px';
  });

  loguito.addEventListener('click', () => {
    window.location = 'index.html';
  });

  /* Falta alinear botón con input */
})();