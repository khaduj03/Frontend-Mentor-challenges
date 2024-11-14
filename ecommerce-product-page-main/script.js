let card = document.getElementById("card");
let count = document.querySelector(".count");
let numberCount = 0;
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let addCard = document.querySelector(".add-card");
let element = document.querySelector('.profile');
let pic = document.querySelector(".image");
let cardShoping = document.querySelector(".added");
let   before=document.querySelector(".before")
let  after=document.querySelector(".after")
let imageProduct=document.getElementById("pic-product")



window.onload = function() {
    if (minus && plus && count && element) {

        //to add product for buy
        minus.addEventListener("click", function () {
            let countNum = parseInt(count.innerText) || 0;
            countNum = countNum > 0 ? countNum - 1 : 0;
            count.innerText = countNum;
            numberCount = countNum;
           
        });
        
        //to delete product 
        plus.addEventListener("click", function () {
            let countNum = parseInt(count.innerText) || 0;
            countNum += 1;
            count.innerText = countNum;
            numberCount = countNum;
            
        });
    } else {
        console.warn("Minus, plus, count, or profile element not found.");
    }
};




//for counting product and update that
function updateBadgeContent(newContent) {
    if (element) {
        element.style.setProperty('--badge-content', `"${newContent}"`);
    } else {
        console.warn("Element with class 'profile' not found.");
    }
}



//for display modal card 
let cardModal = document.getElementById("card-modal");
function showModal(){
    if (cardModal) {
        cardModal.classList.toggle("active");

        if(cardModal.classList.contains("active"))
            {after.style.display="none"
            before.style.display="none"
            }else{
            after.style.display="flex"
            before.style.display="flex"
            }
        
    } else {
        console.warn("Card modal not found.");
    }
}
card.addEventListener("click", showModal);



//for details of modal card showing  how much are products and the price of them
function handleAddCardClick() {
    let before = document.querySelector(".profile");
    let countValue = parseInt(count.innerText) || 0;
    
    if (countValue >= 1) {
        if (pic) pic.style.border = "3px solid orange";
        if (before) before.classList.add("activepro");
        updateBadgeContent(countValue); 
        
        
        let image = document.createElement("img");
        let paragraph = document.createElement("p");
        let button = document.createElement("button");
        let container = document.createElement("div");
        let discreption = document.createElement("div");
        let price = document.createElement("p");
        let del=document.createElement("span")
        
        cardShoping.style.display = "flex";
        cardShoping.style.flexDirection = "column";

        discreption.style.display = "flex";
        discreption.style.flexDirection = "column";
        discreption.style.justifyContent = "center";
        discreption.style.alignItems = "center";
        
        let result = 125.000 * countValue;
        price.innerText = `$125.000 x ${countValue} = $${result}.000`;
        price.style.marginRight="10px"

        container.style.display = "flex";

        image.src = "images/image-product-1.jpg"; 
        image.alt = "Product Image";
        image.style.width = "60px"; 
        image.style.margin = "10px"; 
        image.style.height = "60px";
        image.style.borderRadius = "5px";
        
        paragraph.innerText = "Fail limited Edition Sneakers.";
        
        button.innerText = "Checkout";
        button.style.backgroundColor = "orange";
        button.style.border = "none";
        button.style.color = "white";
        button.style.width = "250px";
        button.style.height = "40px";
        button.style.margin = "10px";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";

       del.innerHTML=`<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>`
        del.style.marginLeft="50px"

        if (countValue >= 1) {
           
            cardShoping.innerHTML = ""; 

           
            cardShoping.appendChild(container);
            container.appendChild(image);
            container.appendChild(discreption);
            discreption.appendChild(paragraph);
            paragraph.appendChild(del)
            discreption.appendChild(price);
            cardShoping.appendChild(button);
        }

        del.addEventListener("click" , function(){
            if (pic) pic.style.border = "none";
            if (before) before.classList.remove("activepro");
            
            if (cardShoping) {
                cardShoping.innerHTML = "Your cart is empty.";
            }
        })
    } else {

        
        if (pic) pic.style.border = "none";
        if (before) before.classList.remove("activepro");
        if (cardShoping) {
            cardShoping.innerHTML = "Your cart is empty.";
  

        }
    }
}
if (pic) pic.addEventListener("click", showModal);
if (addCard) addCard.addEventListener("click", handleAddCardClick);




let picture = document.getElementById("pic-product");
let modalProduct = document.querySelector(".modal-show-product");

const IMAGES = [
    { url: "images/image-product-1.jpg" },
    { url: "images/image-product-2.jpg" },
    { url: "images/image-product-3.jpg" },
    { url: "images/image-product-4.jpg" }
];
let currentImageIndex = 0; 
// for display cleare the image of product
function showProduct() {
    modalProduct.classList.add("product");

    let containerProduct = document.createElement("div");
    let imageProduct = document.createElement("img");
    let morePicProduct = document.createElement("div");
    let closeModal = document.createElement("div");
    let imageContainer = document.createElement("div");
    let next = document.createElement("div");
    let previous = document.createElement("div");
    
    containerProduct.classList.add("container-product");
    imageProduct.classList.add("image-product");
    morePicProduct.classList.add("more-pics");
    closeModal.classList.add("close-modal");
    imageContainer.classList.add("image-container");
    next.classList.add("next-button");
    previous.classList.add("previous-button");

    imageProduct.src = IMAGES[currentImageIndex].url;
    imageProduct.style.width = "380px";
    imageProduct.style.height = "380px";
    imageProduct.style.borderRadius = "10px";

    closeModal.innerHTML = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fill-rule="evenodd"/></svg>`;
    previous.innerHTML = `<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>`;
    next.innerHTML = `<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>`;

   //for showing pics when we click the nex button
    next.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % IMAGES.length;
        imageProduct.src = IMAGES[currentImageIndex].url;
    });

    //for showing pics when we click the previous  button
    previous.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + IMAGES.length) % IMAGES.length;
        imageProduct.src = IMAGES[currentImageIndex].url;
    });

   
    IMAGES.forEach((img, index) => {
        let thumbnail = document.createElement("img");
        thumbnail.classList.add("image-thumbnail");
        thumbnail.src = img.url;
        thumbnail.style.width = "70px";
        thumbnail.style.height = "70px";
        thumbnail.style.marginRight = "10px";
        thumbnail.style.borderRadius = "6px";
        thumbnail.addEventListener("click", function () {
            currentImageIndex = index; 
            imageProduct.src = img.url;
        });
        morePicProduct.appendChild(thumbnail);
    });

    containerProduct.appendChild(closeModal);
    modalProduct.appendChild(containerProduct);
    imageContainer.appendChild(previous);
    imageContainer.appendChild(imageProduct);
    imageContainer.appendChild(next);
    containerProduct.appendChild(imageContainer);
    containerProduct.appendChild(morePicProduct);

    closeModal.addEventListener("click", function () {
        modalProduct.innerHTML = ""; 
        modalProduct.classList.remove("product");
    });
}

picture.addEventListener("click", showProduct);

//showing product to replace image in the home page 
let images=document.querySelectorAll('.image-product')
let contanerPictuer=document.querySelector(".main-pictuer")
    console.log(images)
   images.forEach(pic=>{
    let img=document.getElementById("pic-product")
    pic.addEventListener("click" , function(){
        img.src=pic.src
    })
    
   })


////showing product to replace image in the home page in mobile device
 imageProduct.src = IMAGES[currentImageIndex].url;
 imageProduct.style.width = "100%";
 imageProduct.style.height = "400px";
 imageProduct.style.borderRadius = "10px";
 before.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % IMAGES.length;
    imageProduct.src = IMAGES[currentImageIndex].url;
});

after.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + IMAGES.length) % IMAGES.length;
    imageProduct.src = IMAGES[currentImageIndex].url;
});

   
   


//menu for reponsive mobile
let menuIcon=document.getElementById("menu-icon")
function showMenu(){
    let menu=document.createElement("div")
    menu.classList.add("menu")
    after.style.display="none"
    before.style.display="none"
    let options=document.querySelector(".list-menu-active")
    let container=document.querySelector(".contaner")
    let closeIcon=document.createElement("li")
        
    
    closeIcon.innerHTML=`<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>`
    options.prepend(closeIcon);
    container.appendChild(menu);
    menu.appendChild(options);

    menu.style.transform="translateX(0px)"
    function closeMenu(){
        menu.style.transform="translateX(-600px)"
        options.removeChild(closeIcon)
        after.style.display="flex"
        before.style.display="flex"
        
    }
    closeIcon.addEventListener("click" , closeMenu)

}
menuIcon.addEventListener("click" , showMenu)
