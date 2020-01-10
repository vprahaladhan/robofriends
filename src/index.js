import "tachyons";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
// import { Provider } from "react-redux";
import "./styles/index.css";
import { searchTextReducer } from './reducers';
import App from "./containers/App";

const store = createStore(searchTextReducer)

const renderApp = () => ReactDOM.render(
//   <Provider store={store}>
    <App store={store}/>,
//   </Provider>,
  document.getElementById("root")
);

renderApp()
store.subscribe(renderApp)