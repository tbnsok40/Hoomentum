import {atom, selector} from "recoil";
import axios from 'axios';
export interface Todos {
    id: number,
    text: string,
    isComplete: boolean
}

// const GetWeather = async () => {
//     const getData = axios.get("https://api.openweathermap.org/data/2.5/weather?q=busan&appid=38baf7dd158addef335f90d46582eb22").then(res => res.data);
//     const data =  await getData;
//     console.log("data", data)
//     return data
// }

export const textState = atom({
    key: 'textState',
    default: ''
})

export const todoListState = atom<Todos[]>({
    key: 'todoListState',
    default: []
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'ShowAll'
})

export const currWeather = atom({
    key: 'currWeather',
    default: null
})

export const todoListStatsState = selector({
    key: "todoListStatsState",
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const completedNum = todoList.filter((item) => item.isComplete).length;
        const unCompletedNum = totalNum - completedNum;
        const percentCompleted = totalNum === 0 ? 0 : completedNum / totalNum;

        return {
            totalNum,
            completedNum,
            unCompletedNum,
            percentCompleted,
        }
    }
})

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        console.log("filter ",filter)

        switch (filter) {
            case "ShowCompleted":
                const comp = list.filter((item) => item.isComplete)
                console.log(comp)
                return list.filter((item) => item.isComplete);
            case "ShowUnCompleted":
                const uncomp = list.filter((item) => !item.isComplete);
                console.log(uncomp);
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    }
})