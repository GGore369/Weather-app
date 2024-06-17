// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '70a3ddcd9fmshcf44298b3fd41f0p1fb8f8jsne76831d7be21',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch(url,options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



function rada(city) {

    let searchCity = document.getElementById('search-city')
    let cityName = document.getElementById("city-name")

    cityName.innerHTML = city
    searchCity.value = ""

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70a3ddcd9fmshcf44298b3fd41f0p1fb8f8jsne76831d7be21',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };


    async function my_weather_app() {

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            temp.innerHTML = result.temp
            max_temp.innerHTML = result.max_temp
            min_temp.innerHTML = result.min_temp
            // cloud_pct.innerHTML = result.cloud_pct
            feels_like.innerHTML = result.feels_like
            humidity.innerHTML = result.humidity
            wind_speed.innerHTML = result.wind_speed
            // sunrise.innerHTML = result.sunrise
            // sunset.innerHTML = result.sunset
            wind_degrees.innerHTML = result.wind_degrees
        } catch (error) {
            console.error(error);
        }
    }

    my_weather_app();

}

let searchGlass = document.getElementsByClassName('search-glass')[0];
searchGlass.addEventListener('click',(event)=>{
    let searchCity = document.getElementById('search-city')
    if(searchCity.value === ""){

    }
    else{
        rada(searchCity.value)
    }
})

function speakWeather(weather, city) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = `The weather in ${city} is as follows. The temperature is ${weather.temp} degrees Celsius, feels like ${weather.feels_like} degrees, with a humidity of ${weather.humidity} percent and wind speed of ${weather.wind_speed} metre per second and wind degree of ${weather.wind_degrees} .`;
    window.speechSynthesis.speak(speech);
}

rada("Mumbai");



let date = new Date();

let year = date.getFullYear();
console.log(year);

const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];


let gateDate = document.getElementById('getdate')

function Time(){
    let date = new Date();

    let y = date.getFullYear();
    let mon = date.getMonth();
    let m = month[mon];
    let d = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    

    seconds = parseInt(seconds)
    minutes = parseInt(minutes)
    hour = parseInt(hour)

    if(d < 10){
        d = '0' + d;
    }


    if(minutes < 10){
        minutes = '0' + parseInt(minutes)
    }

    if(hour < 10){
        hour = '0' + parseInt(hour)
        moraft.innerHTML = "AM"
    }

    if(hour > 12){
        hour = hour - 12;
        hour = '0' + hour;
        moraft.innerHTML = "PM"
    }

    getdate.innerHTML = d;
    getmonth.innerHTML = m; 
    getyear.innerHTML = y;

    gethour.innerHTML = hour;
    getminute.innerHTML = minutes;

}

setInterval(Time,1000);
