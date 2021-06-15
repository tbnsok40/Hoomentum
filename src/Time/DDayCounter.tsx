
const DDayCounter = () => {
    const onchange = (value: string) => {
        setInterval(function (){

            let currentTime: number = new Date().getTime();
            let countDownTime: number = new Date(value).getTime();

            let distance: number = countDownTime - currentTime;
            let day: number = Math.floor(distance / (1000 * 60 * 60 * 24)); // 1sec: 1000 milli sec, 1min: 60sec, 1hour: 60min, 1day: 24hour
            let hour: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let sec: number = Math.floor((distance % (1000 * 60)) / 1000);

            const Dday = document.getElementById("d-day") as HTMLElement;
            Dday.innerHTML = day + " day " + hour + " hour " + min + " min " + sec + " sec"
            // day, hour 만 표시하고, 1 day  이하로 떨어지면 hour, min, sec 으로 바꾸자.
        }, 1000);
    }

    return (
        <div id="dDay">
            <input type="date" onChange={(e) => onchange(e.target.value)}/>
            <h4 id="d-day"/>
        </div>
    )
}

export default DDayCounter;