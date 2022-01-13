const api_key = `72ba4d937dfc01ecf52cb78f8a5e13bd`;
const searchTemprature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('conditon', temperature.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
