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


// const initialState = { count: 0 };
//
// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }
//
// export const AppContext = React.createContext({});
//
// export const StoreProvider = ({ children }: any) => {
//   const value = React.useReducer(reducer, initialState);
//
//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };
//
// export const useStore = () => {
//   return useContext(AppContext);
// };
