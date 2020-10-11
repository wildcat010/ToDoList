import * as types from "./actionTypes";
import { handleResponse, handleError } from "../../utils/utils";

const baseUrl = "http://localhost:3000/finished.json";

export function loadFinishedToDoListSuccess(finishedToDoList) {
    return {type: types.LOAD_FINISHED_TODOLIST_SUCCESS, finishedToDoList};
}

export function loadFinishedToDoList(){
    return function(dispatch){
        return getFinishedToDoList().then(finishedToDoList => {
            dispatch(loadFinishedToDoListSuccess(finishedToDoList));
        }).catch(error => {
            throw error;
        })
    }
}

export function getFinishedToDoList() {
    return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
