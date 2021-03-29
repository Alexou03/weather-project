function showTemperature(response) {
  console.log("res", response);
  if (response.cod < 200 || response.cod >= 300) {
    alert("No city found");
  } else {
    let cityEl = document.getElementById("city");
    let tempEl = document.getElementById("temp");
    cityEl.innerText = response.name;
    let temperature = Math.round(response.main.temp);
    tempEl.innerText = temperature;
  }
}

function showCurrentLocationTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let currentLocationTemperature = document.querySelector("#temperature");
  let currentLocation = document.querySelector("#city");
  currentLocationTemperature.innerHTML = temp;
  currentLocation.innerHTML = response.data.name;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "5779b9efe682cbd7772ff1fe36bcdf5f";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiLocationUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  fetch(apiLocationUrl)
    .then((r) => r.json())
    .then(showCurrentLocationTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("#btn-current");
button.addEventListener("click", getCurrentPosition);
