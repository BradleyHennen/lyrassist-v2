import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../features/Login/ducks";
import firebaseReducer from './slices/firebaseAuthSlice'

const rootReducer = combineReducers({
    loginReducer,
    firebaseReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});
export default store;
