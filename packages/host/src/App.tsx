import "./index.scss";

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";


import ErrorBoundary from "./ErrorBoundary";
import { store } from "@workspace/store/src/store";
import Header from "header/Header";
import Datashop from "datashop/Datashop";
import Algopack from "algopack/Algopack";

const App = () => {
  const dispatch = useDispatch()
  //const [store, dispatch] = useStore();

  const countSelector = useSelector((state: any) => {

    console.log(state.count)

    return state.count;
  });


  return (
    <div>
      <p><b>Host App</b></p>
      <p>The app will not gonna work without store</p>
      <ErrorBoundary>
        <Header count={countSelector.count} dispatch={dispatch}/>
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
            dispatch({
              type: "decrement",
            });
          }}
        >
          Decrement
        </button>
      </footer>
    </div>
  );
};

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Suspense>,
  document.getElementById("app")
);
