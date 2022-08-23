let navMenu = document.querySelector('.nav-menu')
let navMenuClose = document.querySelector('.nav-menu-close')
let mainBody = document.querySelector('.body')

navMenu.addEventListener('click', () => {
    mainBody.classList.toggle('sidebar_close')
})