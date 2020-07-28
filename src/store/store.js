import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const configureStore = () => {
  if (process.env.NODE_ENV !== "production") {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  } else {
    return createStore(reducers, applyMiddleware(thunk));
  }
};

export default configureStore();
