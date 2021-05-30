import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./view/projectList";
import reportWebVitals from "./reportWebVitals";
import UseArray from "./view/use-Array";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <UseArray></UseArray>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
