const background = document.getElementById("background");
const middleBackground1 = document.getElementById("middle-background-left");
const middleBackground2 = document.getElementById("middle-background-right");
const middleForeground1 = document.getElementById("middle-foreground-left");
const middleForeground2 = document.getElementById("middle-foreground-right");
const middleGround = document.getElementById("middle-ground");
const foreground1 = document.getElementById("foreground1");
const foreground2 = document.getElementById("foreground2");
const ground = document.getElementById("ground");


function parallaxEffect() {
    let value = window.scrollY;

    middleBackground1.style.left = value * 0.2 +"px";
    middleBackground2.style.left = value * -0.2 +"px";
    middleForeground1.style.left = value * 0.4 +"px";
    middleForeground2.style.left = value * -0.4 +"px";
    foreground1.style.left = value * -1 + "px";
    foreground1.style.top = value * 1 + "px";
    foreground2.style.left = value * 1 + "px";
    foreground2.style.top = value * 1 + "px";
    ground.style.top = value * 1 + "px";

    background.style.top = value * 0.98 + "px";
    middleBackground1.style.top = value * 1 +"px";
    middleBackground2.style.top = value * 1 +"px";
    middleForeground1.style.top = value * 1 +"px";
    middleForeground2.style.top = value * 1 +"px";
    middleGround.style.top = value * 1 + "px";
    
}

window.addEventListener("scroll", parallaxEffect);