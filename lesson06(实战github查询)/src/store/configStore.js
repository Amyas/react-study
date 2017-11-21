import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers";

const initialState = {};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    reduxThunk,
    createLogger({ stateTransformer: state => JSON.parse(state) })
  )
);
