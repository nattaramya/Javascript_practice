async function getWeather() {
      const city = document.getElementById("cityInput").value;
      const apiKey = "8dd7df546d12763e9d47965e8c1bf6cc"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;

        document.getElementById("weatherResult").innerHTML = `
          <h3>${data.name}</h3>
          <img class="weather-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
          <p><strong>${temp}°C</strong></p>
          <p>${desc}</p>
          <p>Humidity: ${humidity}%</p>
        `;
      } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${error.message}</p>`;
      }
    }