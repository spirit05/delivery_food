const cB = document.querySelector('#cart-button'),
    cart = document.querySelector('.modal'),
    close = document.querySelector('.modal-close');

const toggleModal = () => cart.classList.toggle('active');

cB.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

new WOW().init();