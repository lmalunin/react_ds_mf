import React, { useEffect } from "react";
import "./index.scss";
import { increment } from "@workspace/store/src/slices/count.slice";
import { fetchUsersThunk } from "@workspace/store/src/thunks/fetch-users.thunk";

const Header = ({ dispatch, count = 0, users = [] }) => {

  /*  useEffect(() => {
      dispatch(fetchUsersThunk())
    }, [])*/

  return (
    <header>
      <p>Remote Header / count: {count}</p>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
      >Increment
      </button>

      <h3>USERS</h3>
      {users?.map((user: { id: number, name: string }) => {
        return (
          <div key={user.id}>{user.name}</div>
        )
      })}
    </header>
  );
}
export default Header;
