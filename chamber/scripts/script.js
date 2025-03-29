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

// Set the timestamp when the form page loads
window.onload = function() {
  // Set the timestamp for the hidden field when the form page is loaded
  var timestampField = document.getElementById('timestamp');
  if (timestampField) {
    var currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;
  }

  // On the Thank You page, get the timestamp from the URL and display it
  if (window.location.pathname.includes("thankyou.html")) {
    var urlParams = new URLSearchParams(window.location.search);
    var timestamp = urlParams.get('timestamp');
    if (timestamp) {
      document.getElementById('timestampDisplay').innerText = timestamp;
    } else {
      document.getElementById('timestampDisplay').innerText = "Timestamp not available";
    }
  }
};

// Function to add the timestamp to the form action URL
// function addTimestampToUrl(event) {
//   event.preventDefault(); // Prevent the form from submitting immediately
//   var form = event.target;
//   var timestamp = document.getElementById('timestamp').value;
//   if (timestamp) {
//     form.action = "thankyou.html?timestamp=" + encodeURIComponent(timestamp); // Append timestamp to the URL
//   }
//   form.submit(); // Submit the form after modifying the action
// }
