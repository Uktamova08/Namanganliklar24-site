const elModal = document.querySelector('.js-modal');
const elModalClose = document.querySelector('.js-modal-close');
const elModalOpen = document.querySelector('.js-modal-opener');


elModalOpen.addEventListener('click', function () {
    elModal.classList.add('modal-block');
    elModal.classList.remove('modal-none');
   

});


elModal.addEventListener('click', function () {
    elModal.classList.add('modal-none');
    elModalClose.classList.remove('modal-block');
 
});

