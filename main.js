const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    console.log("entro");
    mobileMenu.classList.toggle("inactive");
}