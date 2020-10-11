import {createStore, applyMiddleware, compose} from "redux";

import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";


export default function configureStore(initialiseState) {
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer, 
        initialiseState, 
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
        );
}