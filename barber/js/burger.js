(function () {
    const burger = document.querySelector('.burger');
    const menuBody = document.querySelector('.menu__body');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        menuBody.classList.toggle('_active');
    });
    
}());