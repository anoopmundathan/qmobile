"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
var redux_observable_1 = require("redux-observable");
var actions_1 = require("./actions");
var epicMiddleware = redux_observable_1.createEpicMiddleware(actions_1.rootEpic);
var store = redux_1.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(epicMiddleware));
exports.App = function () { return (React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_native_1.View, null, "Hello"))); };
//# sourceMappingURL=App.js.map