const key = "8f6890a36e17421aa59142430261004";
const url = "https://api.weatherapi.com/v1/current.json?aqi=yes&q=";
var btn = document.getElementsByClassName("sbutton")[0];
var input = document.getElementsByClassName("searchbar")[0];

async function weather(name) {
    const response = await fetch (url + name + `&key=${key}`);
    var data = await response.json();
    
    console.log(data)

    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + '°c'
    document.querySelector(".place").innerHTML = data.location.name
    document.querySelector(".hvalue").innerHTML = data.current.humidity + `%` 
    document.querySelector(".wvalue").innerHTML = data.current.wind_kph + ` Km/h`

    document.querySelector(".weather").style.display = 'block'

    
    if(data.current.condition.text == "Overcast"){
    document.querySelector(".wicon").src = "images/clouds.png"
    } else if(data.current.condition.text == "Clear" || data.current.condition.text == "Sunny" ){
    document.querySelector(".wicon").src = "images/clear.png"
    } else if(data.current.condition.text == "Partly cloudy" || data.current.condition.text == "Mist" ){
    document.querySelector(".wicon").src = "images/mist.png"
    } else if(data.current.condition.text == "Light rain"){
    document.querySelector(".wicon").src = "images/drizzle.png"
    } else if(data.current.condition.text == "Torrential rain shower" || data.current.condition.text == "Rain"){
    document.querySelector(".wicon").src = "images/rain.png"
    } else if(data.current.condition.text == "Snow"){
    document.querySelector(".wicon").src = "images/snow.png"
    } 
};
weather("ahmedabad")

btn.addEventListener("click", ()=> {
    weather(input.value)
})





