const menu=document.getElementById('menu')
const menuIcon=document.getElementById('menu-icon')
const menuCross=document.getElementById('menu-icon-bar')

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
})

menuIcon.addEventListener('click', () => {
    menuCross.classList.toggle('menu-icon__bar--click')
})