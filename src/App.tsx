import React, {useEffect} from 'react';
import './App.css';

import DateTime from "./Time/DateTime";
import Weather from "./Weather/Weather";
import DDayCounter from "./Time/DDayCounter";
import DailyList from "./TodoList/DailyList";

import {RecoilRoot} from "recoil";


// component 분리하고, recoil 로 데이터 뿌리기
// d day 설정기

const App = () => {
    return (
        <RecoilRoot>
            <div className="App">
                <DateTime/>
                <DDayCounter/>
                <Weather/>
                <DailyList/>
            </div>
        </RecoilRoot>
    );
}

export default App;
