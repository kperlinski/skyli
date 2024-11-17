## README.md

# 🌤 Skyly - Weather Forecast Website

### Project Description
**Skyly** is a web application that provides real-time weather information based on the city name entered by the user. It is a simple and quick tool to check the weather in any location.

---

### Features
- **Current weather**: Information about the current weather conditions, such as temperature, humidity, wind speed, air pressure, and other details.
- **Search by city name**: Users can manually enter the name of a city to check its current weather conditions.

---

### Requirements
- A system that supports Git (for exporting the repository to your local machine).
- Access to a weather API (e.g., [OpenWeatherMap](https://openweathermap.org/api)) with an API key.

---

### Installation

1. **Export the repository to your local machine**
   - Use the following command to clone the repository:
     ```bash
     git clone https://github.com/kperlinski/skyly.git
     cd skyly
     ```

2. **Run the application**
   - Open the `index.html` file in your web browser.

The application will run locally and allow you to view the current weather conditions.

---

### Technologies
- **Frontend**: HTML, CSS, JavaScript
- **API**: OpenWeatherMap or other selected weather API

---

### Example Functions

- **`search()`**
  - A function that allows the user to enter the name of a city for which they want to retrieve weather data.

- **`checkWeather()`**
  - A function responsible for retrieving and displaying the current weather data for the entered city.

---

### Development Plan
- Add the ability to check the weather forecast for upcoming days.
- Implement the feature to search weather based on the user's location.
- Allow users to save multiple favorite cities.
- Add a map.
- Enable other useful settings.
