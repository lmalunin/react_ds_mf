import React from "react";
import "./index.scss";
import { increment } from "@workspace/store/src/slices/count.slice";

type AAA = { n: number }

const Algopack = ({ dispatch }) => {

  const BBB: AAA = { n: 5 }

  return (
    <div className="dashboard">

      <h3>Remote Algopack</h3>

      Algopack BBB:{BBB.n}
      <br/>
      <br/>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        Increment
      </button>
      <br/>
      <span>----------------------------------------</span>
    </div>
  );
}

export default Algopack;
