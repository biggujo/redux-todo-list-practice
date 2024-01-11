import { applyMiddleware, createStore } from "redux";
import {
  composeWithDevTools, devToolsEnhancer,
} from "@redux-devtools/extension";
import { rootReducer } from "./reducers.js";
import { thunk } from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
