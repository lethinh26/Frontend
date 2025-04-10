const weatherData = {
  "Hà Nội": {
    temperature: 25,
    humidity: 70,
    windSpeed: 5,
    description: "Có mây",
    icon: "☁️"
  },
  "Hồ Chí Minh": {
    temperature: 32,
    humidity: 75,
    windSpeed: 7,
    description: "Nắng",
    icon: "☀️"
  },
  "Đà Nẵng": {
    temperature: 28,
    humidity: 82,
    windSpeed: 12,
    description: "Mưa rào",
    icon: "🌧️"
  }
};

let searchBtn = document.getElementById("btn");
let result = document.getElementById("result");
searchBtn.addEventListener("click", () => {
  let cityValue = document.getElementById("cityValue").value;
  let weather = weatherData[cityValue];
  result.innerHTML = "";

  if (weather) {
    let div = document.createElement("div");
    div.classList.add("shadow", "w-50", "rounded", "rounded-3", "m-auto", "p-3");

    div.innerHTML = `
      <h1>${cityValue}</h1>
      <div class="row">
        <div class="col fs-1">${weather.icon} ${weather.temperature}°C</div>
        <div class="col">
          <div class="row">${weather.description}</div>
          <div class="row">Độ ẩm ${weather.humidity}%</div>
          <div class="row">Tốc độ gió ${weather.windSpeed}km/h</div>
        </div>
      </div>
    `;

    result.appendChild(div);
  }
});
