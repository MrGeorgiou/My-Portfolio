const ground = document.getElementById("ground");
const foreground1 = document.getElementById("foreground1");
const foreground2 = document.getElementById("foreground2");
const middle = document.getElementById("middle");
const background = document.getElementById("background");


function parallaxEffect() {
    let value = window.scrollY;
    ground.style.top = value * 1 + "px"; 
    foreground1.style.top = value * 1 + "px";
    foreground2.style.top = value * 1 + "px";
    middle.style.top = value * 1 + "px";
    background.style.top = value * 1 + "px";
    
    foreground1.style.left = value * 1 + "px";
    foreground2.style.left = value * -1 + "px";
    // foreground1.style.left = value * 1 + "px";
}

window.addEventListener("scroll", parallaxEffect);