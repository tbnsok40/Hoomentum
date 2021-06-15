import React, {useEffect} from 'react';
import axios from 'axios';


const getWeather = async () => {
    const getData = axios.get("https://api.openweathermap.org/data/2.5/weather?q=busan&appid=38baf7dd158addef335f90d46582eb22").then(res => res.data);
    const data = await getData;
    console.log(data)

    // 절대온도 - 273 = 섭씨 온도
    console.log(data.name, data.weather.map((wea: { main: string; }) => wea.main), data.main.temp - 273)
}


const Weather = () => {
    useEffect(() => {
        getWeather()
    }, [])

    return(
        <div id="weather">123</div>
    )
}
export default Weather;