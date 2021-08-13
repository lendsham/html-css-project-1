let hamburger = document.querySelector('.header .navbar .navlist .hamburger');
let mobile = document.querySelector('.header .navbar .navlist ul');
let item = document.querySelectorAll('.header .navbar .navlist ul a');
let header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile.classList.toggle('active');
});

// Toggle Dark Mode
let darkMode = document.getElementById('darkMode');
let toggleButton = document.querySelector('.fa-toggle-off');
let contentBackground = document.getElementById('content');
let contentColorTitle = document.querySelector('#content .content-title');
let contentColorP = document.querySelector('#content .content .content-top p');
let formBackground = document.getElementById('form');
let formColorContainer = document.querySelector('.form');


darkMode.addEventListener('click', function() {
    if(contentColorTitle.style.color === 'gainsboro' && contentColorP.style.color === 'gainsboro') {
        contentColorTitle.style.color = 'black';
        contentColorP.style.color = 'black';
    } else {
        contentColorTitle.style.color = 'gainsboro';
        contentColorP.style.color = 'gainsboro';
    }

        toggleButton.classList.toggle('fa-toggle-on');
        contentBackground.classList.toggle('contentDarkMode');
        formBackground.classList.toggle('formDarkMode');
        formColorContainer.classList.toggle('white');
});
// End Toggle Dark Mode

item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile.classList.toggle('active');
    });
});

