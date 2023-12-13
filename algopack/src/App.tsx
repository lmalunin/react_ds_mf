import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="container">
    <div>Name: algopack</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>SCSS: Empty SCSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
