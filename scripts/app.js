// const projectDisplaySquareElement = document.getElementById("xs-and-os");
const skillsSectionSvgElements = document.querySelectorAll(".svg-skills-section");
const myEmailAddressh3Element = document.getElementById("email-address");
const copyEmailBtnElement = document.getElementById("copy-email-adress");
const myPhoneNumberh3Element = document.getElementById("phone-number");
const copyPhoneNumberBtnElement = document.getElementById("copy-phone-number");
const navBtnElement = document.getElementById("nav-button");
const navBarElement = document.getElementById("nav-bar");

const skillsSectionSvg1 = document.getElementById("svg-html");
const skillsSectionSvg2 = document.getElementById("svg-css");
const skillsSectionSvg3 = document.getElementById("svg-javascript");
const skillsSectionSvg4 = document.getElementById("svg-react");

const skillsSectionItemText1 = document.querySelector("#skills-item1-text p")
const skillsSectionItemText2 = document.querySelector("#skills-item2-text p")
const skillsSectionItemText3 = document.querySelector("#skills-item3-text p")
const skillsSectionItemText4 = document.querySelector("#skills-item4-text p")

const skillsSectionItemTextList = [skillsSectionItemText1, skillsSectionItemText2, skillsSectionItemText3, skillsSectionItemText4]
let navBarVisibility = false;

function copyEmailToClipboard () {
    const emailValue = myEmailAddressh3Element.textContent;
    navigator.clipboard.writeText(emailValue);
    alert("Email-address copied to clipboard.")
}

function copyPhoneNumberToClipboard () {
    const phoneNumberValue = myPhoneNumberh3Element.textContent;
    navigator.clipboard.writeText(phoneNumberValue);
    alert("Phone-number copied to clipboard.")
}

// function switchProjectDisplayImage () {
//     projectDisplaySquareElement.firstElementChild.firstElementChild.src = "/images/Xs & Os-5.png";
// }

// function switchBackProjectDisplayImage () {
//     projectDisplaySquareElement.firstElementChild.firstElementChild.src = "/images/Xs & Os-4.png";
// }

    
function showInfo(event) {
    selectedSkillSectionItemNumber = event.target.dataset.item;
    skillsSectionItemTextList[selectedSkillSectionItemNumber -1].style.display = "block";
}

function removeInfo(event) {
    selectedSkillSectionItemNumber = event.target.dataset.item;
    skillsSectionItemTextList[selectedSkillSectionItemNumber -1].style.display = "none";
}

function navBarVisibilityToggle() {
    if(!navBarVisibility) {
        navBarElement.style.display = "block";
        navBarVisibility = true;
    } else {
        navBarElement.style.display = "none";
        navBarVisibility = false;
    }
}

skillsSectionSvg1.addEventListener("mouseenter", showInfo);

// projectDisplaySquareElement.addEventListener("mouseenter", switchProjectDisplayImage);
// projectDisplaySquareElement.addEventListener("mouseleave", switchBackProjectDisplayImage);



for (let skillsSectionSvgElement of skillsSectionSvgElements) {
        skillsSectionSvgElement.addEventListener("mouseenter", showInfo);
        skillsSectionSvgElement.addEventListener("mouseleave", removeInfo);
    }

copyEmailBtnElement.addEventListener("click", copyEmailToClipboard)
copyPhoneNumberBtnElement.addEventListener("click", copyPhoneNumberToClipboard)
navBtnElement.addEventListener("click", navBarVisibilityToggle)