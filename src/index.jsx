import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "styles/globalStyle";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
  // </Provider>
);
