// Get all elements with class "currentyear" OR id "currentyear"
const currentYearElements = document.querySelectorAll("#currentyear, .currentyear");
const currentYear = new Date().getFullYear();

currentYearElements.forEach((el) => {
  el.textContent = currentYear;
});

// Last modified date
const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById("lastModifiedMobile");

if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}
