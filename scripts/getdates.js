const currentYearElements = document.querySelectorAll("#currentyear, .currentyear");
const currentYear = new Date().getFullYear();

currentYearElements.forEach((el) => {
  el.textContent = currentYear;
});

// Last modified date (only show the date, no time)
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString(); // Format as local date
const lastModifiedElement = document.getElementById("lastModifiedMobile");

if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}
