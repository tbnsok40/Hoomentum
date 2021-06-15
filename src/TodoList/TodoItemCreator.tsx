import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {textState, todoListState} from "../store/Atom";
import React, {useState} from "react";

const TodoItemCreator = () => {

    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldList) => {
            return [
                ...oldList,
                {
                    id: getId(),
                    text: inputValue,
                    isComplete: false

                }
            ];
        });
        setInputValue("")
    };

    let id = 0;
    const getId = () => {
        return id++;
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>ADD</button>
        </div>
    );
}

export default TodoItemCreator;
