import React from "react";
import "./index.scss";

const Header = ({ dispatch, count = 0 }) => (
  <header>
    <p>Remote Header / count: {count}</p>
    <button
      onClick={() => {
        dispatch({
          type: "increment",
        });
      }}
    >Increment
    </button>
  </header>
);
export default Header;
