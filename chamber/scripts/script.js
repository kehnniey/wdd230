

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



// Grid./List
const membersContainer = document.getElementById('members');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

gridButton.addEventListener('click', () => {
  membersContainer.classList.add('grid');
  membersContainer.classList.remove('list');
});

listButton.addEventListener('click', () => {
  membersContainer.classList.add('list');
  membersContainer.classList.remove('grid');
});

async function getMembers() {
  try {
    const response = await fetch('https://kehnniey.github.io/wdd230/chamber/data/members.json');
    const { members } = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Failed to fetch members:', error);
    membersContainer.innerHTML = `<p class="error">Unable to load member directory.</p>`;
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = '';

  members.forEach(({ name, address, phone, website, image, membership, description }) => {
    const card = document.createElement('section');
    card.classList.add('card');

    card.innerHTML = `
      <img src="https://kehnniey.github.io/wdd230/chamber/images/${image}" alt="${name} logo" loading="lazy" />
      <h3>${name}</h3>
      <p>${address}</p>
      <p>${phone}</p>
      <span class="membership ${membership.toLowerCase()}">
        ${getMembershipBadge(membership)}
      </span>
      <p>${description}</p>
      <a href="${website}" target="_blank" rel="noopener">Visit Website</a>
    `;

    membersContainer.appendChild(card);
  });
}

function getMembershipBadge(level) {
  const badges = {
    Gold: '🌟 Gold Member',
    Silver: '🥈 Silver Member',
    Bronze: '🥉 Bronze Member',
  };
  return badges[level] || '';
}

getMembers();

