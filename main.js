var menuBar = document.querySelector('#menu_bar');
var navLinks = document.querySelector('.nav_Links');

navLinks.style.top = '-450px'

menuBar .onclink = function () {
    if (navLinks.style.top == '-450px') {
        navLinks.style.top = '50px';

    } else{
        navLinks.style.top ='-450px'
    }
}