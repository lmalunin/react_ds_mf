import React, { useEffect } from "react";
import "./index.scss";
import { increment } from "@workspace/store/src/slices/count.slice";
import { fetchUsersThunk } from "@workspace/store/src/thunks/fetch-users.thunk";

const Header = ({ dispatch, count = 0 }) => {

  useEffect(() => {
    dispatch(fetchUsersThunk())
  }, [])

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
