const NavbarList = document.querySelector('.navbar-list');
const MenuBtn = document.querySelector('.menu-button');

MenuBtn.addEventListener('click', function(){
    NavbarList.classList.toggle('open');
});