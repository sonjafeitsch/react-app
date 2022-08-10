import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      Hello React
    </div>
  </React.StrictMode>
);
