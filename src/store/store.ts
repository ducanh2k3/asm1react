/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { productReducer } from "../reducers/products";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(productReducer, enhancer);

export default store;
