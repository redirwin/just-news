import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

// import rootReducer from "./store/reducers";

const store = createStore(reducer);

function reducer() {
  return {
    name: "Just the News"
  };
}

ReactDOM.render(
  <Provider store="store">
    <App />
  </Provider>,
  document.getElementById("root")
);
