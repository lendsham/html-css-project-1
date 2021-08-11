const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile = document.querySelector('.header .navbar .navlist ul');
const item = document.querySelectorAll('.header .navbar .navlist ul a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile.classList.toggle('active');
});

item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile.classList.toggle('active');
    });
});