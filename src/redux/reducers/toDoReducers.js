import * as types from "../actions/actionTypes";
import initialState from "./initialState";


function toDoReducers(state = initialState.toDoList, action) {
    switch(action.type) {
        case types.LOAD_TODOLIST_SUCCESS:
            return action.toDoList;
        default:
            return state;
    }
}

export default toDoReducers;