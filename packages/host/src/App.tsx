import "./index.scss";

import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { useStore, StoreProvider } from "store/store";
import ErrorBoundary from "./ErrorBoundary";
import Header from "header/Header";
import Datashop from "datashop/Datashop";
import Algopack from "algopack/Algopack";

const App = () => {
  const [store, dispatch] = useStore();

  return (
    <div>
      <p><b>Host App</b></p>
      <p>The app will not gonna work without store</p>
      <ErrorBoundary>
        <Header count={store.count} />
      </ErrorBoundary>
      <ErrorBoundary>
        {/*<Datashop dispatch={dispatch} />*/}
      </ErrorBoundary>
      <ErrorBoundary>
        {/*<Algopack dispatch={dispatch} />*/}
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
    <StoreProvider>
      <App />
    </StoreProvider>
  </Suspense>,
  document.getElementById("app")
);
