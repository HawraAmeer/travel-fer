import * as types from "../actions/types";
const initialState = {
  locations: [
    { id: 1, name: "bahrain" },
    { id: 2, name: "dxb" },
  ],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LOCATION:
      state.loading = false;
      return { ...state, locations: action.payload };

    default:
      return state;
  }
};

export default reducer;
