import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useRecoilState} from "recoil";
import {currWeather} from "../store/Atom";

// 절대온도 - 273 = 섭씨 온도

const Weather = () => {
    useEffect(() => {
    }, [])
    const[state, setState] = useState();
    let Weather;
    let count = 0;
    const GetWeather = async () => {
        let getData;
        if (count < 20) {
            getData = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=busan&appid=38baf7dd158addef335f90d46582eb22").then(res => res.data);
        }
        console.log(getData)
        count ++
        return await getData;
    }

    let temp = null;

    GetWeather().then(res => temp = res);

    // setState 사용하지 않고, 바인딩 할 수 있는 방법?
    // Weather Api reload Time:

    // const ReloadTime = 1000*60*3
    // setInterval(GetWeather, ReloadTime)

    return (
        <div id="weather">
        </div>
    );
}
export default Weather;