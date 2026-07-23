# Weather App

A simple and responsive Weather App built with **HTML**, **CSS**, and **JavaScript** that fetches real-time weather data using the **OpenWeatherMap API**.

## Features

- Search weather by city name
- Current temperature
- Weather condition
- Displays city
- Humidity
- Wind speed
- Fast API-based weather updates

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API

## Project Structure

```
weather-app/
│
├── index.html
├── style.css
├── script.js
├── images/
└── README.md
```

## API Setup

1. Create a free account at **OpenWeatherMap**.
2. Generate your API key.
3. Create a local file named `config.js` (this file is ignored by Git) and add:

```javascript
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
```

4. Open the project in your browser.

## How to Run

1. Open the project folder.
2. Open `index.html` in your browser.

No installation is required.

## Example API Request

```text
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

# Live Demo

https://weather-app-plum-nine-59.vercel.app/