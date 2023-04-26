import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App.tsx";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.hydrate(
  // <Provider store={store}>
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  // </Provider>,
    document.getElementById("root")

);

reportWebVitals();
