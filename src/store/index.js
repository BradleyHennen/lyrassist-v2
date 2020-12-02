import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import loginReducer from "../features/Login/ducks";

const rootReducer = combineReducers({
    loginReducer: loginReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});
export default store;
