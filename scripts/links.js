const linksURL = "https://kehnniey.github.io/wdd230/data/links.json"; 
const activitiesContainer = document.getElementById("activities");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error("Failed to fetch JSON");
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        const weekParagraph = document.createElement("p");
        weekParagraph.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.target = "_blank";
            anchor.textContent = link.title;

            weekParagraph.appendChild(anchor);
            if (index < week.links.length - 1) {
                weekParagraph.appendChild(document.createTextNode(" | "));
            }
        });

        activitiesContainer.appendChild(weekParagraph);
    });
}

getLinks();
