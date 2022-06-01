import { combineReducers } from "redux";
import { useReducers } from "./FetchAction";

export const rootReducer = combineReducers({data:useReducers})


export type rootState = ReturnType <typeof rootReducer>