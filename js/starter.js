const navBar = document.querySelector('nav');
const hamburgerBtn = document.querySelector('.hamburger.btn');
const closeBtn = document.querySelector('.closeNav.btn');


hamburgerBtn.addEventListener('click', () => {
    navBar.classList.add('activeNav');
    document.querySelector('body').classList.add('noScroll');
    closeBtn.classList.add('showClose');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('activeNav');
    closeBtn.classList.remove('showClose');
})