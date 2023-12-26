import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const App = () => (
  <div className="container">
    <div>Name: datashop</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>SCSS: Empty SCSS</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
