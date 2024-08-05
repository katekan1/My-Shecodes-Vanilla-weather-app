document
  .getElementById("search-button")
  .addEventListener("click", async function () {
    let city = document.getElementById("city-input").value;
    try {
      let weatherData = await getWeather(city);
      updateWeatherUI(weatherData);
      document.getElementById("city-name").textContent = city;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });
async function getWeather(city) {
  let apiKey = "802c9c10be5f7cact2abba03f4270ao2";
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  let data = await response.json();
  return data;
}
function updateWeatherUI(data) {
  let date = new Date();
  document.getElementById("date-time").textContent = date.toLocaleString();
  document.getElementById("weather-description").textContent =
    data.weather[0].description;
  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").textContent = `Wind: ${
    data.wind?.speed || 0
  } km/h`;
  document.getElementById("temperature").textContent = `${data.main.temp}°C`;
  document.getElementById(
    "weather-icon"
  ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
