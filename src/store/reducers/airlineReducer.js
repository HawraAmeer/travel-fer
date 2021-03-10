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

    default:
      return state;
  }
};

export default reducer;
