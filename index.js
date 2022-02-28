const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("activeMenu");
})