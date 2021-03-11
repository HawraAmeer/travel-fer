import * as types from "../actions/types";

const initialState = {
  airlines: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRLINE:
      state.loading = false;
      return { ...state, airlines: action.payload };

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
