// document.getElementById("year").textContent = new Date().getFullYear();
// document.getElementById("lastModified").textContent = document.lastModified;

// Set the last modified date dynamically in the footer
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




const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Discover
document.addEventListener("DOMContentLoaded", () => {
  const visitMessage = document.getElementById("visitMessage");

  if (visitMessage) {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
      visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const msDiff = now - Number(lastVisit);
      const dayDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
      visitMessage.textContent =
        dayDiff < 1
          ? "Back so soon! Awesome!"
          : `You last visited ${dayDiff} day${dayDiff === 1 ? "" : "s"} ago.`;
    }

    localStorage.setItem("lastVisit", now);
  }
});


// join-thankyou.js

// // Utility function to get formatted current date and time
// function getCurrentTimestamp() {
//   const now = new Date();
//   return now.toLocaleString(); // e.g., "3/28/2025, 2:15:30 PM"
// }

// // Populate the timestamp field on join.html
// function setTimestamp() {
//   const timestampField = document.getElementById("timestamp");
//   if (timestampField) {
//       timestampField.value = getCurrentTimestamp();
//   }
// }

// // Validate input pattern for title/position
// function validateTitle() {
//   const titleInput = document.getElementById("position");
//   const pattern = /^[a-zA-Z-\s]{7,}$/;
//   if (!pattern.test(titleInput.value)) {
//       alert("Position/Title must be at least 7 characters and contain only letters, hyphens, and spaces.");
//       titleInput.focus();
//       return false;
//   }
//   return true;
// }

// // Handle form submission on join.html
// function validateForm(event) {
//   if (!validateTitle()) {
//       event.preventDefault(); // Prevent form submission if validation fails
//   }
// }

// // Thank you page logic
// function displayThankYouMessage() {
//   const params = new URLSearchParams(window.location.search);
//   const firstName = params.get("firstName");

//   if (firstName) {
//       document.getElementById("thankYouMessage").textContent = `Thank you, ${firstName}, for joining the Springfield Chamber of Commerce!`;
//   }
// }

// // Initialize scripts on page load
// document.addEventListener("DOMContentLoaded", () => {
//   setTimestamp();

//   // Attach event listener to form on join.html
//   const joinForm = document.getElementById("joinForm");
//   if (joinForm) {
//       joinForm.addEventListener("submit", validateForm);
//   }

//   // Handle thank you page message
//   if (document.getElementById("thankYouMessage")) {
//       displayThankYouMessage();
//   }
// });
