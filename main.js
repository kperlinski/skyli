const apiKey = "15b06c019fff008717e859b6ef28c93d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function search() {
    const searchBox = document.querySelector("#search input");
    NameC = searchBox.value;
    checkWeather(NameC);

}

