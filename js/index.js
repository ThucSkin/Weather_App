const App_Id = '64dce9c58ec6eb4b31115c4ffd066aff';
const Default_Value = '--';


const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const nd = document.querySelector('.nd');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change', (e) =>{
    console.log('[searchInput]', e);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${App_Id}&units=metric&lang=vi`)
       .then(async res => {
        const data = await res.json();
        console.log('[searchInput]', data);
        cityName.innerHTML = data.name || Default_Value;
        weatherState.innerHTML = data.weather[0].description || Default_Value;
        weatherIcon.setAttribute(`src`, `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        nd.innerHTML = Math.round(data.main.temp) || Default_Value;

        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm')
        sunset.innerHTML = moment.unix(data.sys.sunset).format('HH:mm') || Default_Value;
        humidity.innerHTML = data.main.humidity || Default_Value;
        windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || Default_Value;
       });
});