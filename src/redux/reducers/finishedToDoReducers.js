import * as types from "../actions/actionTypes";
import initialState from "./initialState";


function finishedToDoReducers(state = initialState.finishedToDoList, action) {
    switch(action.type) {
        case types.LOAD_FINISHED_TODOLIST_SUCCESS:
            return action.finishedToDoList;
        default:
            return state;
    }
}

export default finishedToDoReducers;