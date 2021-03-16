import * as types from "./types";

export const setPassengersList = (passengers) => {
  return {
    type: types.SET_PASSENGERS,
    payload: passengers,
  };
};
