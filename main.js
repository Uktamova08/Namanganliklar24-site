const elModal = document.querySelector('.js-modal');
const elModalOpen = document.querySelector('.js-modal-opener');
const elModalClose = document.querySelector('.js-modal-close');


elModalOpen.addEventListener('click', function () {
    elModal.classList.remove('modal-none');
    elModal.classList.add('modal-block');
});

elModalClose.addEventListener('click', function () {
    elModalClose.classList.remove('modal-block');
    elModal.classList.add('modal-none');
});

