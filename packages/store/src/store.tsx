import React, { useContext } from "react";

const initialState = { count: 0 };

function reducer(state :any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const AppContext = React.createContext({});

export const StoreProvider = ({ children }: any) => {
  const value = React.useReducer(reducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useStore = () => {
  return useContext(AppContext);
};
