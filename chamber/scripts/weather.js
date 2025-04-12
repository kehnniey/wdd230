const apiKey = "0aec6412eede92415f476e7030db63f4";
    const lat = 42.10199552119699;
    const lon = -72.59433516836432;
    
    const weatherContainer = document.getElementById("weather-container");
    const forecastContainer = document.querySelector(".forecast-container");
  
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );
        const data = await response.json();
  
        if (data.cod === 200 || data.cod === "200") {
          const temperature = data.main.temp.toFixed(0);
          const description = data.weather[0].description;
          const wind = data.wind.speed;
          const humidity = data.main.humidity;
  
          weatherContainer.innerHTML = `
            <p>🌤️ <strong>${data.name}:</strong> ${temperature}°F</p>
            <p>${description}</p>
            <p>💨 Wind: ${wind} mph | 💧 Humidity: ${humidity}%</p>
          `;
        } else {
          weatherContainer.innerHTML = "<p>Unable to load weather data.</p>";
        }
      } catch (error) {
        console.error("Weather Error:", error);
        weatherContainer.innerHTML = "<p>Unable to fetch weather data.</p>";
      }
    }
  
    async function getForecast() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );
        const data = await response.json();
  
        const forecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
  
        forecastContainer.innerHTML = forecasts.map(forecast => {
          const date = new Date(forecast.dt_txt).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric"
          });
          const icon = forecast.weather[0].icon;
          const temp = forecast.main.temp.toFixed(0);
          const desc = forecast.weather[0].description;
  
          return `
            <div class="forecast">
              <p><strong>${date}</strong></p>
              <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
              <p>${temp}°F</p>
              <p>${desc}</p>
            </div>
          `;
        }).join("");
      } catch (error) {
        console.error("Forecast Error:", error);
        forecastContainer.innerHTML = "<p>Unable to fetch forecast data.</p>";
      }
    }
  
    window.addEventListener("load", () => {
      getWeather();
      getForecast();
    });