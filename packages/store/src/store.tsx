import React, { useContext } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/user.slice";
import { countReducer } from "./slices/count.slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    count: countReducer
  }
})

export * from './thunks/fetch-users.thunk';
