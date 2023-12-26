import React from "react";
import "./index.scss";
import addNumbers from "@workspace/libs/src";
import { Somecomponent } from '@workspace/libs/src/somecomponent'
import { increment } from "@workspace/store/src/slices/count.slice";

const Datashop = ({ dispatch }) => (
  <div className="dashboard">
    <h3>Remote Datashop</h3>
    5+7={addNumbers(5, 7)}
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
    <br/>
    <span>----------------------------------------</span>
  </div>
);

export default Datashop;
