import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CardContextProvider from "./components/context/CardContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CardContextProvider>
        <App />
      </CardContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
