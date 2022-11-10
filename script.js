const openNav = document.getElementById('open-nav')
const navLinks = document.querySelector('.nav-links')


openNav.addEventListener('click',() => {
    if(openNav.src.match('hamburger')){
        openNav.src = 'images/icon-close.svg';
        navLinks.style.visibility = 'visible'
    }else{
        openNav.src = 'images/icon-hamburger.svg';
        navLinks.style.visibility = 'hidden'
    }
})