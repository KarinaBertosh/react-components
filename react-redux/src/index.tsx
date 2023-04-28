import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { StaticRouter } from "react-router-dom/server";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
// import { setupStore } from "./store/store";

// const store = setupStore();

hydrateRoot(
  document.getElementById("root")!,
  // <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  // </Provider>
);

reportWebVitals();
