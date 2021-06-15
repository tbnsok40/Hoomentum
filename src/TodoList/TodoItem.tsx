import {useRecoilState} from "recoil";
import {todoListState, Todos} from "../store/Atom";


const TodoItem = ({item}:any) => {

    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({target: {value}}:any) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value
        });
        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete
        })
        setTodoList(newList);
    }

    const replaceItemAtIndex = (arr: Todos[], index: number, newValue: any) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    const removeItemAtIndex = (arr: Todos[], index: number) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)]
    }


    return (
        <div>
            <input type="" value={item.text} onChange={editItemText}/>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>❌</button>
        </div>
    );
}

export default TodoItem;