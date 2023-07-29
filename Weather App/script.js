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

function rada(city){

const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '70a3ddcd9fmshcf44298b3fd41f0p1fb8f8jsne76831d7be21',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
cityName.innerHTML = city;
async function my_weather_app() {

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        console.log(result);
        cloud_pct.innerHTML = result.cloud_pct
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        max_temp.innerHTML = result.max_temp
        min_temp.innerHTML = result.min_temp
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        temp.innerHTML = result.temp
        wind_degrees.innerHTML = result.wind_degrees
        wind_speed.innerHTML = result.wind_speed
    } catch (error) {
        console.error(error);
    }
}


my_weather_app();
cityName.innerHTML = city;
}


submit.addEventListener("click",(e)=>{
    e.preventDefault();
    rada(city.value)
})

rada("Mumbai");
