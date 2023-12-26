import React, { useEffect } from "react";
import "./index.scss";

//dynamic store - static store
import { increment } from "@workspace/store/src/slices/count.slice";
//import { increment } from "@workspace/store_static/slices/count.slice";
import { fetchUsersThunk } from "@workspace/store/src/thunks/fetch-users.thunk";
import { addUserThunk } from "@workspace/store/src/thunks/add-user.thunk";
import { useThunk } from "@workspace/libs/src/utils/thunk.utils";
import { removeUserThunk } from "@workspace/store/src/thunks/remove-user.thunk";
//import { fetchUsersThunk } from "@workspace/store_static/thunks/fetch-users.thunk";

const Header = ({ dispatch, count = 0, users = [] }) => {

  useEffect(() => {
    dispatch(fetchUsersThunk())
  }, [])

  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUserThunk);
  const addUserHandler = () => {
    doCreateUser()
  }

  // const removeUser = (user: { id: number, name: string }) => {
  //   dispatch(removeUserThunk(user))
  // }

  return (
    <header>
      <h3>Remote Header / count: {count}</h3>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
      >Increment
      </button>

      <h3>USERS</h3>
      {users?.map((user: { id: number, name: string }) => {
        return (
          <div key={user.id} style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '10px' }}>
              {user.name}
            </div>
            {/*<div onClick={() => removeUser(user)} style={{ cursor: 'pointer' }}>x</div>*/}
          </div>

        )
      })}
      <br/>
      <button onClick={addUserHandler}>add User</button>
      <br/>
      <span>----------------------------------------</span>
    </header>
  );
}
export default Header;
