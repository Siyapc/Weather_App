const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b482b4769emsh7a8c45ecd6432a2p13bdbejsnbbf03d4ac9ba",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
};

const getweather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = formatTime(response.sunrise);
      sunset.innerHTML = formatTime(response.sunset);
    })

    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});
getweather("Goa");

function fetchWeatherForCities() {
  const cities = [
    { name: "London", row: document.getElementById("rowLondon") },
    { name: "Boston", row: document.getElementById("rowBoston") },
    { name: "Seoul", row: document.getElementById("rowSeoul") },
    { name: "Lucknow", row: document.getElementById("rowLucknow") },
    { name: "Kolkata", row: document.getElementById("rowKolkata") },
  ];

  cities.forEach((city) => fetchWeather(city.name, city.row));
}

// Fetch weather data for the default cities when the page loads
fetchWeatherForCities();
