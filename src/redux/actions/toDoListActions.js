import * as types from "./actionTypes";
import { handleResponse, handleError } from "../../utils/utils";

const baseUrl = "http://localhost:3000/todo.json";

export function loadToDoListSuccess(toDoList) {
    return {type: types.LOAD_FINISHED_TODOLIST_SUCCESS, toDoList};
}

export function loadToDoList(){
    console.log("hello from the actions loadToDoList()");
    return function(dispatch){
        return getToDoList().then(toDoList => {
            dispatch(loadToDoListSuccess(toDoList));
        }).catch(error => {
            throw error;
        })
    }
}

export function getToDoList() {
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
