import { combineEpics } from "redux-observable";
import { loginUser } from "./loginActions";

export const rootEpic = combineEpics(
  loginUser
);

