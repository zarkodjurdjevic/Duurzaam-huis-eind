const notificationElement = document.querySelector(".notification")
const iconElement = document.querySelector(".weather-icon")
const tempElement = document.querySelector(".temperature-value p")
const descElement = document.querySelector(".temperature-description p")
const locationElement = document.querySelector(".location p")


const weather ={};

weather.temperature = {
    unit : "celsius"
}

// app contst and vars
const KELVIN = 273;
 // api key
const key = "82360b849c4994684984f8df575da973";

// check if browser supports geolocation
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition( setPosition, showError);
}else{
    notificationElement.style.display = "block"
    notificationElement.innerHTML = "<p> Browser Doesn't support geolocation</p>"
}
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords. longitude;
    getWeather(latitude,longitude);
}
// show errror when there is an issue with geolocation
function showError(error){
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML = `<p> ${error.message}</p>`;
}
// get weater from api
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });

}
// display weather to ui 
function displayWeather(){
    iconElement.innerHTML = `<img  style="height: 80%; width: 80%;" src="weer-functie/icons/${weather.iconId}.png"/>`
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
