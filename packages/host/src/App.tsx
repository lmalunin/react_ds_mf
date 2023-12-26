import "./index.scss";

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";


import ErrorBoundary from "./ErrorBoundary";
import { store } from "@workspace/store/src/store";
import Header from "header/Header";
import Datashop from "datashop/Datashop";
import Algopack from "algopack/Algopack";
import { decrement } from "@workspace/store/src/slices/count.slice";
import reportWebVitals from "./reportWebVitals";


const App = () => {
  const dispatch = useDispatch()

  const countSelector = useSelector((state: any) => {
    return state.count;
  });

  const usersSelector = useSelector((state: any) => {
    //console.log('state.users', state.users)
    return state.users;
  })


  return (
    <div>
      <p><b>Host App</b></p>
      <p>The app will not gonna work without store</p>
      <ErrorBoundary>
        <Header count={countSelector.data} dispatch={dispatch} users={usersSelector.data}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Datashop dispatch={dispatch}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Algopack dispatch={dispatch}/>
      </ErrorBoundary>
      <footer>
        <p>Host Footer</p>
        <button
          onClick={() => {
            dispatch(decrement(1));
          }}
        >
          Decrement
        </button>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App/>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
