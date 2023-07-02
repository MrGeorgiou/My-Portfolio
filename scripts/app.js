const navBtnElement = document.getElementById("nav-button");
const navBarElement = document.getElementById("nav-bar");
const skillsSectionSvgContainerElements = document.querySelectorAll(".svg-skills-container");
const skillsSectionTextElements = document.querySelectorAll(".skill-text");
const myEmailAddressh3Element = document.getElementById("email-address");
const copyEmailBtnElement = document.getElementById("copy-email-adress");
const myPhoneNumberh3Element = document.getElementById("phone-number");
const copyPhoneNumberBtnElement = document.getElementById("copy-phone-number");

let navBarVisibility = false;

let skillsSectionTextVisibilityData = [
  0, 0, 0
]

function navBarVisibilityToggle() {
 
  if (!navBarVisibility) {
    navBarElement.style.display = "block";
    navBarVisibility = true;
  } else {
    navBarElement.style.display = "none";
    navBarVisibility = false;
  }
}

function toggleSkillInfo(event) {
  const selectedSkillSectionItemNumber = event.target.dataset.item;

   if (skillsSectionTextVisibilityData[selectedSkillSectionItemNumber - 1] === 0) {
    skillsSectionTextVisibilityData[selectedSkillSectionItemNumber - 1] = 1;
    skillsSectionTextElements[selectedSkillSectionItemNumber - 1].style.display = "block"
  } else {
      skillsSectionTextVisibilityData[selectedSkillSectionItemNumber - 1] = 0;
      skillsSectionTextElements[selectedSkillSectionItemNumber - 1].style.display = "none"
    }
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

for (let skillsSectionSvgContainerElement of skillsSectionSvgContainerElements) {
  skillsSectionSvgContainerElement.addEventListener("click", toggleSkillInfo);
  // skillsSectionSvgElement.addEventListener("mouseleave", removeInfo);
}

copyEmailBtnElement.addEventListener("click", copyEmailToClipboard);
copyPhoneNumberBtnElement.addEventListener("click", copyPhoneNumberToClipboard);
