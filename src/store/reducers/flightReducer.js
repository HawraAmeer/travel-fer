import * as types from "../actions/types";

const initialState = {
  flights: [],
  goSearch: null,
  returnSearch: null,
  goFlight: null,
  returnFlight: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FLIGHT:
      if (state.goFlight) return { ...state, returnFlight: action.payload };
      else return { ...state, goFlight: action.payload };

    case types.SEARCH_FLIGHT:
      const { flights, searchFlight, type } = action.payload;
      return {
        ...state,
        flights: flights,
        [type === "go" ? "goSearch" : "returnSearch"]: searchFlight,
        loading: false,
      };

    case types.AIRLINE_FLIGHTS:
      return { ...state, flights: action.payload, loading: false };

    case types.CREATE_FLIGHT:
      return { ...state, flights: [...state.flights, ...action.payload] };

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
