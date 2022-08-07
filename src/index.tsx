import React from "react";
import ReactDOM from "react-dom/client";
import { Weather } from "./Weather";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);
