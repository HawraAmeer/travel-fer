import * as types from "./types";

// SET PASSENGERS
export const setPassengersList = (passengers) => {
  return { type: types.SET_PASSENGERS, payload: passengers };
};
