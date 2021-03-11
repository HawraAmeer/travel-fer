import * as types from "../actions/types";

const initialState = {
  airlines: [],
  airline: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRLINE:
      return { ...state, airline: action.payload, loading: false };

    case types.FETCH_AIRLINES:
      return { ...state, airlines: action.payload, loading: false };

    case types.ADD_FLIGHT:
      const foundAirlineIndex = state.airlines.findIndex(
        (airline) => airline.id === action.airlineId
      );
      return {
        ...(state.airlines[foundAirlineIndex].flights = [
          ...state.airlines[foundAirlineIndex].flights,
          ...action.payload,
        ]),
      };

    default:
      return state;
  }
};

export default reducer;
