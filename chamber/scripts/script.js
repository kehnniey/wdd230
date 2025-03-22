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
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const msDiff = now - Number(lastVisit);
    const dayDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    if (dayDiff < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${dayDiff} day${dayDiff === 1 ? '' : 's'} ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
});
