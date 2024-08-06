document
  .getElementById("search-button")
  .addEventListener("click", async function () {
    let city = document.getElementById("city-input").value;
    console.log(`Searching for weather in: ${city}`);

    try {
      let weatherData = await getWeather(city);
      console.log("Weather data:", weatherData);

      updateWeatherUI(weatherData);
      document.getElementById("city-name").textContent = city;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    console.log(city);
  });
async function getWeather(city) {
  let apiKey = "802c9c10be5f7cact2abba03f4270ao2";
  let response = await fetch(
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  );
  console.log(`Fetching weather data from API for: ${city}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  let data = await response.json();
  console.log("API response data:", data);

  return data;
}
function updateWeatherUI(data) {
  let date = new Date();
  document.getElementById("date-time").textContent = date.toLocaleString();
  document.getElementById("condition").textContent = data.condition.text;
  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.temperature.humidity}%`;
  document.getElementById(
    "wind-speed"
  ).textContent = `Wind: ${data.wind.speed} km/h`;
  document.getElementById(
    "temperature"
  ).textContent = `${data.temperature.current}°C`;
  let iconCode = data.condition.icon;
  console.log(iconCode);
  let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.condition.icon}.png`;
  document.getElementById("weather-icon").src = iconUrl;
  console.log("Weather UI updated");
}
