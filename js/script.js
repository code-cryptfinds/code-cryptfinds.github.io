
//Code to toggle navigation menu when the hamburger is clicked
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navBar = document.querySelector('.nav-bar');
    const navMenu = document.getElementById('nav');
    const menuStyle = document.querySelector('.navigation');


    navToggle.addEventListener('click', function () {
        navBar.classList.toggle('nav-open');
        navToggle.classList.toggle('change');
        navMenu.classList.toggle('nav-menu')
        menuStyle.classList.toggle('newNav');
    });
});
