const navBtnElement = document.getElementById("nav-button");
const navBarElement = document.getElementById("nav-bar");
const skillsSectionSvgElements = document.querySelectorAll(".svg-skills-section");
const skillsSectionTextElements = document.querySelectorAll(".skill-text");
const myEmailAddressh3Element = document.getElementById("email-address");
const copyEmailBtnElement = document.getElementById("copy-email-adress");
const myPhoneNumberh3Element = document.getElementById("phone-number");
const copyPhoneNumberBtnElement = document.getElementById("copy-phone-number");

let navBarVisibility = false;

function navBarVisibilityToggle() {
  if (!navBarVisibility) {
    navBarElement.style.display = "block";
    navBarVisibility = true;
  } else {
    navBarElement.style.display = "none";
    navBarVisibility = false;
  }
}

function showInfo(event) {
  selectedSkillSectionItemNumber = event.target.dataset.item;
  skillsSectionTextElements[selectedSkillSectionItemNumber - 1].style.display =
    "block";
}

function removeInfo(event) {
  selectedSkillSectionItemNumber = event.target.dataset.item;
  skillsSectionTextElements[selectedSkillSectionItemNumber - 1].style.display =
    "none";
}

function copyEmailToClipboard() {
  const emailValue = myEmailAddressh3Element.textContent;
  navigator.clipboard.writeText(emailValue);
  alert("Email-address copied to clipboard.");
}

function copyPhoneNumberToClipboard() {
  const phoneNumberValue = myPhoneNumberh3Element.textContent;
  navigator.clipboard.writeText(phoneNumberValue);
  alert("Phone-number copied to clipboard.");
}

navBtnElement.addEventListener("click", navBarVisibilityToggle);

for (let skillsSectionSvgElement of skillsSectionSvgElements) {
  skillsSectionSvgElement.addEventListener("mouseenter", showInfo);
  skillsSectionSvgElement.addEventListener("mouseleave", removeInfo);
}

copyEmailBtnElement.addEventListener("click", copyEmailToClipboard);
copyPhoneNumberBtnElement.addEventListener("click", copyPhoneNumberToClipboard);
