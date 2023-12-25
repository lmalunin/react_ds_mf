import React from "react";
import "./index.scss";
import { increment } from "@workspace/store/src/slices/count.slice";

const Datashop = ({ dispatch }) => (
  <div className="dashboard">
    <p>Remote Algopack</p>
    <button
      onClick={() => {
        dispatch(increment(1));
      }}
    >
      Increment
    </button>
  </div>
);

export default Datashop;
