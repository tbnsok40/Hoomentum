import {useRecoilValue} from "recoil";
import {todoListStatsState} from "../store/Atom";

const TodoListStats = () => {
    const {
        totalNum,
        completedNum,
        unCompletedNum,
        percentCompleted
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <div id = "todoStats">
            <ul>
                <li> Total items: {totalNum} </li>
                <li> Items Completed: {completedNum} </li>
                <li> Total Uncompleted: {unCompletedNum} </li>
                <li> Total completed: {formattedPercentCompleted} </li>
            </ul>
        </div>
    )
}

export default TodoListStats;