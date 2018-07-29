import { Observable } from "rxjs";
import { ActionsObservable } from "redux-observable";
import { Action } from "redux";
import { TypeKeys } from "./actionTypes";
import { mergeMap} from 'rxjs/operators';
import 'rxjs/add/observable/of';


export const loginUser = (action: ActionsObservable<Action>): Observable<Action> => {
  return action.ofType(TypeKeys.LOGIN)
    .pipe(mergeMap(() => Observable.of<Action>({ type: "LOGIN_SUCCESS"})))
}
