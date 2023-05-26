// const projectDisplaySquareElement = document.getElementById("xs-and-os");
const skillsSectionSvgElements = document.querySelectorAll(".svg-skills-section");
const skillsSectionH3Elements = document.querySelectorAll("#skills-section li h3");
const myEmailAddressh3Element = document.getElementById("email-address");
const copyEmailBtnElement = document.getElementById("copy-email-adress");
const myPhoneNumberh3Element = document.getElementById("phone-number");
const copyPhoneNumberBtnElement = document.getElementById("copy-phone-number");
const navBtnElement = document.getElementById("nav-button");
const navBarElement = document.getElementById("nav-bar");

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
    event.target.parentNode.children[2].style.display ="inline-block";
}

function removeInfo(event) {
    event.target.parentNode.children[2].style.display ="none";
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

// projectDisplaySquareElement.addEventListener("mouseenter", switchProjectDisplayImage);
// projectDisplaySquareElement.addEventListener("mouseleave", switchBackProjectDisplayImage);

for (let skillsSectionSvgElement of skillsSectionSvgElements) {
        skillsSectionSvgElement.addEventListener("mouseenter", showInfo);
        skillsSectionSvgElement.addEventListener("mouseleave", removeInfo);
    }

copyEmailBtnElement.addEventListener("click", copyEmailToClipboard)
copyPhoneNumberBtnElement.addEventListener("click", copyPhoneNumberToClipboard)
navBtnElement.addEventListener("click", navBarVisibilityToggle)