import "tachyons";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import "./styles/index.css";
import App from "./containers/App";
import { robotsReducer } from "./reducers/robotsReducer";
import { searchTextReducer } from "./reducers/searchTextReducer";
import * as serviceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  searchRobots: searchTextReducer,
  fetchRobots: robotsReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);

// renderApp()
// store.subscribe(renderApp)

serviceWorker.register();