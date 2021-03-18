import * as types from "../actions/types";

const initialState = {
  airline: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AIRLINE:
      return { ...state, airline: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
