import * as types from "../actions/types";

const initialState = {
  passengers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PASSENGERS:
      return {
        ...state,
        passengers: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
