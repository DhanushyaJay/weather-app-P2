
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.weather-box');
const weatherdetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIkey = '25ad9718c3a011f269ecafa307a105d1';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    // Corrected template string with API key
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {
            const picture = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temp');
            const description = document.querySelector('.weather-box .des');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    picture.src = 'cloud.png';
                    break;
                case 'Rain':
                    picture.src = 'storm.png';
                    break;
                case 'Snow':
                    picture.src = 'snow.png';
                    break;
                case 'Clouds':
                    picture.src = 'megamootam.png';
                    break;
                case 'Mist':
                    picture.src = 'fog.png';
                    break;
                case 'Haze':
                    picture.src = 'haze.png';
                    break;
                default:
                    picture.src = 'cloudy.png';
                    break;
            }

            temperature.innerHTML = `${json.main.temp}<span>°C</span>`;
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${json.wind.speed}Km/h`;
        })
        .catch(err => console.error('Error fetching weather data:', err));
});
