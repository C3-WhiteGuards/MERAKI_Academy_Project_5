import { createStore, combineReducers } from "redux";

import token from "./loginToken";


const reducers = combineReducers({ token});

const store = createStore(reducers);

export default store;