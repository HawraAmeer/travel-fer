import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import airlineReducer from "./airlineReducer";
import flightReducer from "./flightReducer";
import locationReducer from "./locationReducer";
import passengerReducer from "./passengerReducer";

const rootReducer = combineReducers({
  authReducer,
  airlineReducer,
  flightReducer,
  locationReducer,
  passengerReducer,
});

export default rootReducer;
