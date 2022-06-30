const navbarBtn = document.querySelector('.navbar_bars');
const navbarLinks = document.querySelector('navbar_links');
const links = document.querySelector('links')


navbarBtn.addEventListener('click', () => {
    if( navbarLinks.classList.contains('links')) {
        // navbarLinks.classList.add('links') 
        console.log('fish');
    }
});