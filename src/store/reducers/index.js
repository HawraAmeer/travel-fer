import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import airlineReducer from "./airlineReducer";
import locationReducer from "./locationReducer";
import flightReducer from "./flightReducer";
const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airlineReducer,
  locationReducer,
});

export default rootReducer;
