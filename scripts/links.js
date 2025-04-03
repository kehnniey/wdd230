// const linksURL = "https://kehnniey.github.io/wdd230/data/links.json"; 
// const activitiesContainer = document.getElementById("activities");

document.addEventListener("DOMContentLoaded", getLinks);

async function getLinks() {
    const linksURL = "https://kehnniey.github.io/wdd230/data/links.json"; // Ensure this path matches your JSON file location
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

function displayLinks(weeks) {
    const activitiesElement = document.getElementById("activities");

    if (!activitiesElement) {
        console.error("Element with ID 'activities' not found");
        return;
    }

    activitiesElement.innerHTML = "<h3>Learning Activities</h3>";

    weeks.forEach(week => {
        let weekContent = `<p>${week.week}: `;

        weekContent += week.links.map(link => 
            `<a href="${link.url}" target="_blank">${link.title}</a>`
        ).join(" | ");

        weekContent += "</p>";
        activitiesElement.innerHTML += weekContent;
    });

    console.log("Learning Activities Populated");
}
