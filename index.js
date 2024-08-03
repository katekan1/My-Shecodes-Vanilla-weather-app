let apiKey = `802c9c10be5f7cact2abba03f4270ao`;

document.getElementById(`search-button`).addEventListener(`click`, () => {
  let city = document.getElementById(`city-input`).value;
  getWeatherData(city);
});
async function getWeatherData(city) {
  let responce = await fetch(
    `https;//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  let data = await responce.json();
  displayWeatherData(data);
}
function displayWeatherData(data) {
  let cityName = data.name;
  let temparature = data.main.temp;
  let humidity = data.main.humidity;
  let windspeed = data.wind.speed;
  let weatherDescription = data.weather[0].description;
  let weatherIcon = images / sunny.png;
  let dateTime = new Date().toLocalString();

  document.getElementById(`city-name`).textContent = cityName;
  document.getElementById(
    `temparature`
  ).textContent = `Temparature:${temparature}℃`;
  document.getElementById(`humidity`).textContent = `Humidity:${humidity} %`;
  document.getElementById(
    `wind-speed`
  ).textContent = `Wind Speed:${windspeed} km/h`;

  document.getElementById(`weather-description`).textContent =
    weatherDescription;

  document.getElementById(`weather-icon`).textContent = weatherIcon;

  document.getElementById(`date-time`).textContent = dateTime;
}
