import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "styles/globalStyle";
import store from "./store";
import history from "./components/views/utils/history";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter history={history}>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
