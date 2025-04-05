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
// Directory

// 
// const url = 'https://kehnniey.github.io/wdd230/chamber/data/members.json';
// const membersContainer = document.querySelector('#members');
// const gridBtn = document.querySelector('#grid');
// const listBtn = document.querySelector('#list');

// // Fetch and display members
// async function getMembers() {
//   const response = await fetch(url);
//   const data = await response.json();
//   displayMembers(data.members);
// }

// function displayMembers(members) {
//   members.forEach((member) => {
//     let card = document.createElement('section');
//     card.classList.add('card');

//     let img = document.createElement('img');
//     img.setAttribute('src', `images/${member.image}`);
//     img.setAttribute('alt', `${member.name} logo`);
//     img.setAttribute('loading', 'lazy');
//     img.setAttribute('width', '150');
//     img.setAttribute('height', '150');

//     let name = document.createElement('h3');
//     name.textContent = member.name;

//     let address = document.createElement('p');
//     address.textContent = member.address;

//     let phone = document.createElement('p');
//     phone.textContent = member.phone;

//     let website = document.createElement('a');
//     website.setAttribute('href', member.website);
//     website.setAttribute('target', '_blank');
//     website.textContent = "Visit Website";

//     let level = document.createElement('p');
//     level.classList.add('membership');
//     level.textContent = `${member.membership} Member`;

//     card.appendChild(img);
//     card.appendChild(name);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(website);
//     card.appendChild(level);

//     membersContainer.appendChild(card);
//   });
// }

// // View toggle
// gridBtn.addEventListener('click', () => {
//   membersContainer.classList.add('grid');
//   membersContainer.classList.remove('list');
// });

// listBtn.addEventListener('click', () => {
//   membersContainer.classList.add('list');
//   membersContainer.classList.remove('grid');
// });

// getMembers();

const membersContainer = document.getElementById('members');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

// Fetch and display members
async function getMembers() {
  const response = await fetch('https://kehnniey.github.io/wdd230/chamber/data/members.json');
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  membersContainer.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = `images/${member.image}`;
    img.alt = `${member.name} logo`;
    img.loading = 'lazy';

    const name = document.createElement('h3');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const description = document.createElement('p');
    description.textContent = member.description;

    const website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Visit Website';
    website.target = '_blank';

    const membershipSpan = document.createElement('span');
    membershipSpan.classList.add('membership');

    // Assign class and emoji based on membership
    switch (member.membership) {
      case 'Gold':
        membershipSpan.textContent = '🌟 Gold Member';
        membershipSpan.classList.add('gold');
        break;
      case 'Silver':
        membershipSpan.textContent = '🥈 Silver Member';
        membershipSpan.classList.add('silver');
        break;
      case 'Bronze':
        membershipSpan.textContent = '🥉 Bronze Member';
        membershipSpan.classList.add('bronze');
        break;
    }

    // Append all elements to the card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membershipSpan);
    card.appendChild(description);
    card.appendChild(website);

    membersContainer.appendChild(card);
  });
}

// Toggle view buttons
gridButton.addEventListener('click', () => {
  membersContainer.classList.add('grid');
  membersContainer.classList.remove('list');
});

listButton.addEventListener('click', () => {
  membersContainer.classList.add('list');
  membersContainer.classList.remove('grid');
});

// Run the fetch function
getMembers();
