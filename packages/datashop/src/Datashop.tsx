import React from "react";
import "./index.scss";
import addNumbers from "@workspace/libs/src";

const Datashop = ({ dispatch }) => (
  <div className="dashboard">
    <p>Remote Datashop</p>
    {addNumbers(5, 6)}
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
