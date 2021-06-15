import {atom, selector} from "recoil";

export interface Todos {
    id: number,
    text: string,
    isComplete: boolean
}


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