const weather = document.querySelector(".weather");
const weatherH2 = document.querySelector(".weatherH2");
const weatherImg = document.querySelector(".weatherImg");

const API_KEY = "d0709c8600fe0bbe5b318c04301c6044";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).
        then(response => response.json())
        .then(data => {
        const degree = Math.floor(data.main.temp); 
        const weatherIcon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;
        weatherImg.src = `${iconUrl}`;
        weatherH2.innerText = `${degree}°/`;
    });
    
}
function onGeoError(){
    alert("당신의 위치를 찾을 수 없어요!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

