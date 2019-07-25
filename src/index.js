import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./store/reducers";

import App from "./App";

const store = createStore(rootReducer);

function reducer() {
  return {
    name: "Just the News"
  };
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
