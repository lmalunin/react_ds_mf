-- When updated to React 18 have to use

import React from "react";
//import ReactDOM from "react-dom";

import "./index.scss";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const App = () => (
  <div className="container">
    <div>Name: dashboard</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
