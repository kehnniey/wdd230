const currentYearElements = document.querySelectorAll("#currentyear, .currentyear");
const currentYear = new Date().getFullYear();

currentYearElements.forEach((el) => {
  el.textContent = currentYear;
});


function getLastModified() {
  const lastModified = new Date(document.lastModified);
  const options = {
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit',  
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/New_York',  
    timeZoneName: 'short'
  };
  const formattedDate = lastModified.toLocaleDateString('en-US', options);
  return `Last Modified: ${formattedDate}`;
}

document.getElementById("lastModifiedMobile").innerHTML = getLastModified();


// Hamburger Menu Toggle
// document.addEventListener('DOMContentLoaded', () => {
//   const menuButton = document.querySelector("#menu");
//   const navList = document.querySelector("#nav-list");

//   if (menuButton && navList) {
//       menuButton.addEventListener("click", () => {
//           navList.classList.toggle("open");
//           menuButton.classList.toggle("open");
//       });
//   }
// });

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Local Storage:

  // Set and Get from localStorage
  // const messageKey = "learningMessage";

  // // If not stored yet, set a default message
  // if (!localStorage.getItem(messageKey)) {
  //   localStorage.setItem(messageKey, "You’re viewing Learning Activities from localStorage!");
  // }

  // // Display the stored message
  // const localMessageElement = document.getElementById("localMessage");
  // if (localMessageElement) {
  //   localMessageElement.textContent = localStorage.getItem(messageKey);
  // }

