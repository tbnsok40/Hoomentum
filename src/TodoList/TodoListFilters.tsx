import {useRecoilState} from "recoil";
import {todoListFilterState} from "../store/Atom";


const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target: {value}}: any) => {
        setFilter(value);
    }

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="ShowAll">All</option>
                <option value="ShowCompleted">Completed</option>
                <option value="ShowUnCompleted">Uncompleted</option>
            </select>
        </>
    );
}

export default TodoListFilters;