import React from "react";
import "./index.scss";
import addNumbers from "@workspace/libs/src";
import { Somecomponent } from '@workspace/libs/src/somecomponent'
import { increment } from "@workspace/store/src/slices/count.slice";

const Datashop = ({ dispatch }) => (
  <div className="dashboard">
    <p>Remote Datashop</p>
    {addNumbers(5, 7)}
    <br/>
    <Somecomponent title={'123'}/>
    <br/>
    <button
      onClick={() => {
        dispatch(increment(2));
      }}
    >
      Increment
    </button>
  </div>
);

export default Datashop;
