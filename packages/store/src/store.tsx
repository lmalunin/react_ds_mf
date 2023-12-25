import React, { useContext } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";
import { countReducer } from "./slices/count.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer
  }
})
