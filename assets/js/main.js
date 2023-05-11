"use strict"

//===== start toggle in navbar in response  =====
let toogleMenu = document.querySelector(".toogle")
let menTog = document.querySelector(".menTog")

toogleMenu.addEventListener('click', () => {
    toogleMenu.classList.toggle("active");
    menTog.classList.toggle("close")
})




// ===== start slider head_img =====
let sliderImages = document.querySelector('.head_img .sliderImages');
let items = document.querySelectorAll('.head_img .sliderImages .item');
let btnPrev = document.querySelector(".prev")
let btnNext = document.querySelector(".next")

let currentSlid = 0;
let lengthItem = items.length - 1;

btnNext.onclick = (e) => {
    e.preventDefault();
    if (currentSlid + 1 > lengthItem) {
        currentSlid = 0;
    } else {
        currentSlid = currentSlid + 1;
    }
    relodSlider();
}

btnPrev.onclick = (e) => {
    e.preventDefault();
    if (currentSlid - 1 < 0) {
        currentSlid = lengthItem;
    } else {
        currentSlid = currentSlid - 1;
    }
    relodSlider();
}

let refreshSlider = setInterval(() => { btnNext.click() }, 3500);
function relodSlider() {
    let checkLeft = items[currentSlid].offsetLeft;
    sliderImages.style.left = -checkLeft + 'px';

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { btnNext.click() }, 3500)
}












// ===== start slider our_menu =====
let card_img_cake = document.querySelector('.our_menu .card_img_cake');
let cards = document.querySelectorAll('.our_menu .card_img_cake .card');
let prevCard = document.querySelector(".prevCard")
let nextCard = document.querySelector(".nextCard")

let currentSlidOurMenu = 0;
let lengthItemCard = cards.length - 5;

nextCard.onclick = (e) => {
    e.preventDefault();
    if (currentSlidOurMenu + 1 > lengthItemCard) {
        currentSlidOurMenu = 0;
        // if (style.width= "425px") {
        //     lengthItemCard -1;
        // }
    } else {
        currentSlidOurMenu = currentSlidOurMenu + 1;
    }
    relodSliderOurMenu();
}

prevCard.onclick = (e) => {
    e.preventDefault();
    if (currentSlidOurMenu - 1 < 0) {
        currentSlidOurMenu = lengthItemCard;
    } else {
        currentSlidOurMenu = currentSlidOurMenu - 1;
    }
    relodSliderOurMenu();
}

let refreshSliderTime = setInterval(() => { nextCard.click() }, 3000);

function relodSliderOurMenu() {
    let checkLeft = cards[currentSlidOurMenu].offsetLeft;
    card_img_cake.style.left = -checkLeft + 'px';

    clearInterval(refreshSliderTime);
    refreshSliderTime = setInterval(() => { nextCard.click() }, 3000)
}
