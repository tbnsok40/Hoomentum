import {useEffect} from "react";

const getTime = () => {
    let current: number = new Date().getTime();


    let month = new Date().getMonth();
    let date = new Date().getDate();
    let day = new Date().getDay(); // 요일 (월: 1)
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let second = new Date().getSeconds();

    // console.log("date: ", date, "day: ", day, "hour: ", hour, "min: ", min, "second: ", second);

    let divDate = document.getElementById("date") as HTMLElement;
    divDate.innerHTML = month + "월 " + date + "일"

    let divTime = document.getElementById("time") as HTMLElement;
    divTime.innerHTML = hour + "시 " + min + "분"

    // DOM 에 바인딩 할 것
}

const DateTime = () => {
    useEffect(() => {
        setInterval(getTime, 1000);
    })

    return (
        <div id="dateTime">
            <div id="date"/>

            <div id="time"/>
        </div>
    )
}
export default DateTime;