import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// Actions
import { checkForToken } from "./actions/authActions";
import { fetchFlights } from "./actions/flightActions";
import { fetchAirlines } from "./actions/airlineActions";
import { fetchLocations } from "./actions/locationActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
// store.dispatch(fetchAirlines());
// store.dispatch(fetchFlights());
store.dispatch(fetchLocations());

export default store;
