import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import { loadState, saveState } from "./localStorage";

const configureStore = () => {
  let store;
  if (process.env.NODE_ENV !== "production") {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const existingState = loadState();
    store = createStore(
      reducers,
      existingState,
      composeEnhancers(applyMiddleware(thunk))
    );
  } else {
    const existingState = loadState();
    store = createStore(reducers, existingState, applyMiddleware(thunk));
  }
  store.subscribe(() => saveState(store.getState()));
  return store;
};

export default configureStore();
