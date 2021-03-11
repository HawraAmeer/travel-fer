import * as types from "../actions/types";

const initialState = {
  flights: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
        loading: false,
      };

    case types.AIRLINE_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
        loading: false,
      };

    case types.ADD_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, ...action.payload],
      };

    case types.UPDATE_FLIGHT:
      const updatedFlight = action.payload;
      return {
        ...state,
        flights: state.flights.map((flight) =>
          flight.id === updatedFlight.id ? updatedFlight : flight
        ),
      };

    default:
      return state;
  }
};

export default reducer;
