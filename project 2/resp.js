burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})