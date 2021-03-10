import { ADD_FLIGHT, FETCH_FLIGHTS, UPDATE_FLIGHT } from "../actions/types";

const initialState = {
  flights: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      const { newFlight } = action.payload;

      return {
        ...state,
        flights: [...state.flights, newFlight],
      };

    case UPDATE_FLIGHT:
      const { updatedFlight } = action.payload;
      return {
        ...state,
        flights: state.flights.map((flight) =>
          flight.id === updatedFlight.id ? updatedFlight : flight
        ),
      };

    case FETCH_FLIGHTS:
      console.log(
        "🚀 ~ file: flightsReducer.js ~ line 31 ~ reducer ~  ...state",
        ...state
      );
      return {
        ...state,
        flights: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
