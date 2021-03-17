import instance from "./instance";
import * as types from "./types";

// FETCH AIRLINE
export const fetchAirline = (airlineId) => async (dispatch) => {
  try {
    const res = await instance.get(`/airlines/${airlineId}`);
    dispatch({ type: types.FETCH_AIRLINE, payload: res.data });
  } catch (error) {
    console.log("Error:", error);
  }
};
