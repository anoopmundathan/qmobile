import { combineReducers } from "redux";
import { login } from "./loginReducer";

export const rootReducer = combineReducers(
  login, 
)
