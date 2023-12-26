import React from "react";
import "./index.scss";
import addNumbers, { someInterfaceObject } from "@workspace/libs/src";
import { Somecomponent } from '@workspace/libs/src/somecomponent'

//dynamic store - static store
import { increment } from "@workspace/store/src/slices/count.slice";
//import { increment } from "@workspace/store_static/slices/count.slice";

const Datashop = ({ dispatch }) => {

  return (
    <div className="dashboard">
      <h3>Remote Datashop</h3>

      someInterfaceObject: {someInterfaceObject.x}
      <br/>

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
}

export default Datashop;
