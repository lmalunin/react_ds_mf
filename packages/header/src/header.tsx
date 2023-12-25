import React from "react";
import "./index.scss";
import { increment } from "@workspace/store/src/slices/count.slice";

const Header = ({ dispatch, count = 0 }) => {
  return (
    <header>
      <p>Remote Header / count: {count}</p>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
      >Increment
      </button>
    </header>
  );
}
export default Header;
