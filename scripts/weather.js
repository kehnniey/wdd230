document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");

    // Set current year
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last updated: ${lastModifiedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })}`;
});





// Page Visits: Increment and Store
let pageVisits = parseInt(localStorage.getItem('pageVisits')) || 0;
pageVisits++;
localStorage.setItem('pageVisits', pageVisits);

document.getElementById('pageVisits').textContent = pageVisits;

// Fetch Weather Data from OpenWeatherMap API
const apiKey = "0aec6412eede92415f476e7030db63f4";

const lat = 41.7011;
const lon = -71.5585;



const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
    const location = document.querySelector("#location");
    const tempArea = document.querySelector(".temp-area");
    const captionDesc = document.querySelector("#weather-description");

    const weatherIcon = document.createElement("img");
    tempArea.appendChild(weatherIcon);

    const currentTemp = document.createElement("span");
    currentTemp.setAttribute("id", "current-temp");
    tempArea.appendChild(currentTemp);

    location.innerHTML = data.name;
    const formattedTemp = data.main.temp.toFixed(0);
    currentTemp.innerHTML = `${formattedTemp}&deg;F`;

    data.weather.forEach((weatherEvent) => {
        const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
        let desc = weatherEvent.description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        weatherIcon.setAttribute("width", "100");
        weatherIcon.setAttribute("height", "100");
        captionDesc.innerHTML = `${desc}`;
    });
}