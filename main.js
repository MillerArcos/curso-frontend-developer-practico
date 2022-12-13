const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const orderMenu = document.querySelector(".product-detail");

cardContainer = document.querySelector(".cards-container");

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



const productList=[];

productList.push({
    nombre:"Bike",
    price : 120,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
});

productList.push({
    nombre:"Bike",
    price : 120,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
});

productList.push({
    nombre:"Bike",
    price : 120,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
}); 

renderProducts(productList);

function renderProducts(array){
    for (const product of array) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        
         
        const img = document.createElement("img");
        img.setAttribute("src" , product.image);
        img.setAttribute("alt", "");
        
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
    
    
        const productInfoDiv = document.createElement("div");
        const producPrice = document.createElement("p");
        producPrice.innerText= "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.nombre;
        productInfoDiv.appendChild(producPrice);
        productInfoDiv.appendChild(productName);
    
        const productImg = document.createElement("figure");
        const productImgInfo =document.createElement("img")
        productImgInfo.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productImgInfo.setAttribute("alt" , "");
        productImg.appendChild(productImgInfo);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productImg);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

