import { combineReducers} from "redux";
import finishedToDoList from "./finishedToDoReducers";
import toDoList from "./toDoReducers";

const rootReducer = combineReducers({
    finishedToDoList,
    toDoList
});

export default rootReducer;