document.addEventListener("DOMContentLoaded", function () {
    const currentYearElements = document.querySelectorAll("#currentyear");
    const lastModifiedMobile = document.getElementById("lastModifiedMobile");
    

    // Set current year
    const currentYear = new Date().getFullYear();
    currentYearElements.forEach(el => el.textContent = currentYear);

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    
    if (!isNaN(lastModifiedDate)) { // Ensure the date is valid
        const formattedDate = lastModifiedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        lastModifiedMobile.textContent = `${formattedDate}`;
        
    } else {
        lastModifiedMobile.textContent = "Unavailable";
    
    }
});
