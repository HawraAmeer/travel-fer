import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import flightsReducer from "./flightsReducer";
const rootReducer = combineReducers({
  authReducer,
  flightsReducer,
});

export default rootReducer;
