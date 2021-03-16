import * as types from "./types";

export const setPassengers = (passengers) => {
  return {
    type: types.SET_PASSENGERS,
    payload: passengers,
  };
};
