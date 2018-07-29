import * as React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import { createStore , applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./actions";

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));


export const App = () => (
  <Provider store={store}>
      <View>Hello</View>
  </Provider>
);
