'use strict';

(function(){
  let inputEmail = document.querySelector('[name="email"]');
  let labelEmail = document.querySelector('[for="email"]');

  /* Queda pendiente evento cuando se enfoque en el input el 'label' se
  recorre hacia arriba y minimiza su tamañan un poco */
  inputEmail.addEventListener('click', () => {
    labelEmail.style.margin = '0px 5px 0px 0px';
    labelEmail.style.margin = '0px 0px 0px 5px';
    labelEmail.style.fontsize = '10px';
  });
})();