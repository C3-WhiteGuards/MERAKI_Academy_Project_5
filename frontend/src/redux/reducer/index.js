import { createStore, combineReducers } from "redux";

import loginReduser from "./loginToken";


const reducers = combineReducers({ loginReduser});

const store = createStore(reducers);

export default store;