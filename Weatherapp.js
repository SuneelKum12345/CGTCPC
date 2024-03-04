async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (!cityName) {
        alert('Please enter a city name');
        return;
    }
}

const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric';

try{
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
    }
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = '<h3>${data.name}, ${data.sys.country}</h3><p>${data.weather[0].description}</p><p>Temperature: ${data.main.temp}A C</p><p>Humidity: ${data.main.humidity}%</p>';
} catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Error fetching weather data. Please try again.');
}

}
