document.querySelector('form').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match. Please try again.");
        document.getElementById('password').focus();
        document.getElementById('password').value = '';
        document.getElementById('confirm-password').value = '';
    }
});

// Date
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