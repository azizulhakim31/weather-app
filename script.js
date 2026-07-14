const apiKey = "536edfe8204282d316a6eae9efb88fb5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        const windSpeedMs = data.wind.speed;
        const windSpeedKmh = (windSpeedMs * 3.6).toFixed(1);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = windSpeedKmh + " km/h";

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/assets/clear.gif"
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/assets/cloudy-2.gif"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/assets/rain.gif"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/assets/drizzle.gif"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/assets/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
})