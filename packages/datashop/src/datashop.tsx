import React from "react";
import "./index.scss";

const Datashop = ({ dispatch }) => (
  <div className="dashboard">
    <p>Remote Datashop</p>
    <button
      onClick={() => {
        dispatch({
          type: "increment",
        });
      }}
    >
      Increment
    </button>
  </div>
);

export default Datashop;
