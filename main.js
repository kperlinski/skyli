const apiKey = "15b06c019fff008717e859b6ef28c93d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function search() {
    const searchBox = document.querySelector("#search input");
    NameC = searchBox.value;
    checkWeather(NameC);
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    const image = document.querySelector("#up-bar img");
    document.querySelector('#city').innerHTML = NameC;
    document.querySelector('#temp-up').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('#tempDay').innerHTML = Math.round(data.main.temp_max) + "°C";
    document.querySelector('#tempNight').innerHTML = Math.round(data.main.temp_min) + "°C";
    document.querySelector('#tempOd').innerHTML = Math.round(data.main.feels_like) + "°C";
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#windSpeed').innerHTML = data.wind.speed + "km/h";
    document.querySelector('#humidity').innerHTML = data.main.humidity + "%";

    switch(data.weather[0].main) {
        case 'Clear':
                image.src = 'image/sunny (1).png';
                break;
            case 'Rain':
                image.src = 'image/rain.png';
                break;
            case 'Snow':
                image.src = 'image/snow.png';
                break;
            case 'Clouds':
                image.src = 'image/clouds.png';
                break;
            case 'Mist':
                image.src = 'image/mist.png';
                break;
            case 'Haze':
                image.src = 'image/mist.png';
                break;
            default:
                image.src = 'image/sunny.png';
        
    }
}