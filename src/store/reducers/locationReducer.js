import * as types from "../actions/types";

const initialState = {
  locations: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LOCATIONS:
      return { ...state, locations: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
