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

    default:
      return state;
  }
};

export default reducer;
