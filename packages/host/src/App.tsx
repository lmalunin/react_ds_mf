import "./index.scss";

import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";


import ErrorBoundary from "./ErrorBoundary";

//dynamic store - static store
import { fetchUsersThunk, store } from "store/store";
//dynamic store, but won't work with types yet
//import { fetchUsersThunk, store } from "@workspace/store/src/store";
//static store, but won't work with types yet
//import { fetchUsersThunk, store } from "@workspace/store_static/store";

const Header = React.lazy(() => import('header/Header'));
const Datashop = React.lazy(() => import('datashop/Datashop'));
const Algopack = React.lazy(() => import('algopack/Algopack'));

// import Header from "header/Header";
// import Datashop from "datashop/Datashop";
// import Algopack from "algopack/Algopack";
import { decrement } from "@workspace/store/src/slices/count.slice";
import reportWebVitals from "./reportWebVitals";

//https://stackoverflow.com/questions/68812319/redux-toolkit-argument-of-type-asyncthunkaction-is-not-assignable-to-param
export type AppDispatch = typeof store.dispatch
const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  // useEffect(() => {
  //   dispatch(fetchUsersThunk())
  // }, [])

  /*Destructing alias*/
  const { data: countData } = useSelector((state: any) => {
    return state.count;
  });

  const { isLoading: isUsersLoading, data: usersData, error: usersError } = useSelector((state: any) => {
    //console.log('state.users', state.users)
    return state.users;
  })


  return (
    <div>
      <p><b>Host App</b></p>
      <p>The app will not gonna work without store</p>

      <div>isUsersLoading: {isUsersLoading ? 'true' : 'false'}</div>
      <div>usersError: {JSON.stringify(usersError)}</div>

      <ErrorBoundary>
        <Header count={countData} dispatch={dispatch} users={usersData}/>
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
