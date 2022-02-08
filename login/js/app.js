'use script';

(function(){
  let moreInfo = document.querySelector('#more-info');
  let dsplyMI = document.querySelector('#dsply-mi');

  moreInfo.style.display = 'none';

  dsplyMI.addEventListener('click', () => {
    moreInfo.style.display = 'block';
    dsplyMI.style.display = 'none';
  });
})();