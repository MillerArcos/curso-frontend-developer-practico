const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const orderMenu = document.querySelector(".product-detail");



menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click' , toggleOrderMenu);




function toggleDesktopMenu(){
    
    desktopMenu.classList.toggle("inactive");
    if(!orderMenu.classList.contains("inactive")){
        orderMenu.classList.toggle("inactive");        
    }
}

function toggleMobileMenu(){    
    mobileMenu.classList.toggle("inactive");
    if(!orderMenu.classList.contains("inactive")){        
        orderMenu.classList.toggle("inactive");        
    }
}

function toggleOrderMenu(){
    orderMenu.classList.toggle("inactive");
    
    if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.toggle("inactive");
    }
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    }
    
}
