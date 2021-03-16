import * as types from "../actions/types";

const initialState = {
  flights: [],
  searchFlight: null,
  goFlight: null,
  returnFlight: null,
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

    case types.SEARCH_FLIGHT:
      return {
        ...state,
        flights: action.payload.flights,
        searchFlight: action.payload.searchFlight,
        loading: false,
      };

    case types.SET_FLIGHT:
      if (state.goFlight) return { ...state, returnFlight: action.payload };
      else return { ...state, goFlight: action.payload };

    default:
      return state;
  }
};

export default reducer;
