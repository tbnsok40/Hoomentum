import React from "react";
import {useRecoilValue} from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import {filteredTodoListState} from "../store/Atom";
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";

const DailyList = () => {

    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <div id = "dailyList">
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator/>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}

        </div>
    )
}

export default DailyList;
