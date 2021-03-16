import * as types from "../actions/types";

const initialState = {
  user: null,
  history: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload };

    case types.FETCH_HISTORY:
      return { ...state, history: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
