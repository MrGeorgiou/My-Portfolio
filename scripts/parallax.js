const blackGround = document.getElementById("black-ground");
const blackTree1 = document.getElementById("black-tree-1");
const blackTree2 = document.getElementById("black-tree-2");
const blackTree3 = document.getElementById("black-tree-3");
const blackTree4 = document.getElementById("black-tree-4");
const blackTree5 = document.getElementById("black-tree-5");
const blackTree6 = document.getElementById("black-tree-6");
const blackTree7 = document.getElementById("black-tree-7");
const blackTree8 = document.getElementById("black-tree-8");
const blackTree9 = document.getElementById("black-tree-9");

const greyGround = document.getElementById("grey-ground");
const darkGreyTree1 = document.getElementById("dark-grey-tree-1");
const darkGreyTree2 = document.getElementById("dark-grey-tree-2");
const darkGreyTree3 = document.getElementById("dark-grey-tree-3");
const darkGreyTree4 = document.getElementById("dark-grey-tree-4");
const darkGreyTree5 = document.getElementById("dark-grey-tree-5");
const darkGreyTree6 = document.getElementById("dark-grey-tree-6");

const greyTree1 = document.getElementById("grey-tree-1");
const greyTree2 = document.getElementById("grey-tree-2");
const greyTree3 = document.getElementById("grey-tree-3");
const greyTree4 = document.getElementById("grey-tree-4");
const greyTree5 = document.getElementById("grey-tree-5");
const greyTree6 = document.getElementById("grey-tree-6");
const greyTree7 = document.getElementById("grey-tree-7");
const greyTree8 = document.getElementById("grey-tree-8");
const greyTree9 = document.getElementById("grey-tree-9");

const lightGreyGround = document.getElementById("light-grey-ground");
const lightGreyTree1 = document.getElementById("light-grey-tree-1");
const lightGreyTree2 = document.getElementById("light-grey-tree-2");
const lightGreyTree3 = document.getElementById("light-grey-tree-3");
const lightGreyTree4 = document.getElementById("light-grey-tree-4");
const lightGreyTree5 = document.getElementById("light-grey-tree-5");
const lightGreyTree6 = document.getElementById("light-grey-tree-6");
const lightGreyTree7 = document.getElementById("light-grey-tree-7");
const lightGreyTree8 = document.getElementById("light-grey-tree-8");
const lightGreyTree9 = document.getElementById("light-grey-tree-9");
const lightGreyTree10 = document.getElementById("light-grey-tree-10");
const lightGreyTree11 = document.getElementById("light-grey-tree-11");
const lightGreyTree12 = document.getElementById("light-grey-tree-12");
const welcomeSign = document.getElementById("welcome-sign");
const sky = document.getElementById("sky");

const landing = document.querySelector("#landing.section");
const parallaxWoods = document.getElementById("parallax-woods");
const halfWindowInnerHeight = window.innerHeight / 2;
const oneAndHalfWindowInnerHeight = window.innerHeight * 1.5;

function landingResize() {
if (window.innerWidth > oneAndHalfWindowInnerHeight) {
    landing.style.height = 250 + "vh";
} else if(window.innerWidth > window.innerHeight && window.innerWidth <= oneAndHalfWindowInnerHeight) {
    landing.style.height = 170 + "vh";
} else if (window.innerWidth <= window.innerHeight && window.innerWidth > halfWindowInnerHeight) {
    landing.style.height = 150 + "vh";
} else if (window.innerWidth < halfWindowInnerHeight) {
    landing.style.height = 100 + "vh";
}
}

function parallaxEffect() {
    const parallaxWoodsWidth = parallaxWoods.offsetWidth
    const windowInnerWidthSeventyPercent = ((window.innerWidth / 100) * 70)
    const windowInnerWidthFortyPercent = (window.innerWidth / 2.5);

    if(window.innerWidth > oneAndHalfWindowInnerHeight && window.scrollY > windowInnerWidthFortyPercent) {
        return
    }

    if (window.scrollY > windowInnerWidthSeventyPercent) {
        return
    }

    let value = window.scrollY;
    
    let welcomeSignTopPosition = welcomeSign.style.top
    welcomeSignTopPosition = welcomeSignTopPosition.slice(0, -2);

    blackGround.style.top = value * 1 + "px";

    
    sky.style.top  = value * 1 + "px";
    blackTree1.style.top = value * 1 + "px";
    blackTree3.style.top = value * 1 + "px";
    blackTree1.style.left = value * -0.18 + "px";
    blackTree3.style.left = value * -0.18 + "px";

    blackTree2.style.top = value * 1 + "px";
    blackTree4.style.top = value * 1 + "px";
    blackTree2.style.left = value * -0.25 + "px"; 
    blackTree4.style.left = value * -0.25 + "px";
   
    blackTree5.style.top = value * 1 + "px";
    blackTree7.style.top = value * 1 + "px";
    blackTree9.style.top = value * 1 + "px";
    blackTree5.style.left = value * 0.25 + "px";
    blackTree7.style.left = value * 0.25 + "px";
    blackTree9.style.left = value * 0.25 + "px";

    blackTree6.style.top = value * 1 + "px";
    blackTree8.style.top = value * 1 + "px";
    blackTree6.style.left = value * 0.18 + "px";
    blackTree8.style.left = value * 0.18 + "px";
    

    greyGround.style.top = value * 1 + "px";
    darkGreyTree1.style.top = value * 1 + "px";
    darkGreyTree2.style.top = value * 1 + "px";
    darkGreyTree3.style.top = value * 1 + "px";
    darkGreyTree1.style.left = value * -0.1 + "px";
    darkGreyTree2.style.left = value * -0.08 + "px";
    darkGreyTree3.style.left = value * -0.1 + "px";

    darkGreyTree4.style.top = value * 1 + "px";
    darkGreyTree5.style.top = value * 1 + "px";
    darkGreyTree6.style.top = value * 1 + "px";
    darkGreyTree4.style.left = value * 0.08 + "px";
    darkGreyTree5.style.left = value * 0.1 + "px";
    darkGreyTree6.style.left = value * 0.08 + "px";


    greyTree1.style.top = value * 1 + "px";
    greyTree2.style.top = value * 1 + "px";
    greyTree3.style.top = value * 1 + "px";
    greyTree4.style.top = value * 1 + "px";
    greyTree5.style.top = value * 1 + "px";
    greyTree6.style.top = value * 1 + "px";
    greyTree1.style.left = value * -0.05 + "px";
    greyTree2.style.left = value * -0.035 + "px";
    greyTree3.style.left = value * -0.05 + "px";
    greyTree4.style.left = value * -0.035 + "px";
    greyTree5.style.left = value * -0.05 + "px";
    greyTree6.style.left = value * 0.035 + "px";
    
    greyTree7.style.top = value * 1 + "px";
    greyTree8.style.top = value * 1 + "px";
    greyTree9.style.top = value * 1 + "px";
    greyTree7.style.left = value * 0.05 + "px";
    greyTree8.style.left = value * 0.035 + "px";
    greyTree9.style.left = value * 0.05 + "px";

    lightGreyGround.style.top = value * 0.96 + "px";
    lightGreyTree1.style.top = value * 0.96 + "px";
    lightGreyTree2.style.top = value * 0.96 + "px";
    lightGreyTree3.style.top = value * 0.96 + "px";
    lightGreyTree4.style.top = value * 0.96 + "px";
    lightGreyTree5.style.top = value * 0.96 + "px";
    lightGreyTree1.style.left = value * -0.02 + "px";
    lightGreyTree2.style.left = value * -0.018 + "px";
    lightGreyTree3.style.left = value * -0.02 + "px";
    lightGreyTree4.style.left = value * -0.018 + "px";
    lightGreyTree5.style.left = value * -0.02 + "px";
    
    lightGreyTree6.style.top = value * 0.96 + "px";
    lightGreyTree7.style.top = value * 0.96 + "px";
    lightGreyTree8.style.top = value * 0.96 + "px";
    lightGreyTree9.style.top = value * 0.96 + "px";
    lightGreyTree6.style.left = value * 0.018 + "px";
    lightGreyTree7.style.left = value * 0.02 + "px";
    lightGreyTree8.style.left = value * 0.018 + "px";
    lightGreyTree9.style.left = value * 0.02 + "px";

    lightGreyTree10.style.top = value * 0.96 + "px";
    lightGreyTree11.style.top = value * 0.96 + "px";
    lightGreyTree12.style.top = value * 0.96 + "px";

    welcomeSign.style.top = value * 0.8 + "px";
}

function windowResized() {
    parallaxEffect();
    landingResize();
}

window.addEventListener("scroll", parallaxEffect);
window.addEventListener("resize", windowResized);
window.onload = landingResize();
