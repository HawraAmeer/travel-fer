import instance from "./instance";

import * as types from "./types";

export const addFlight = (newFlight) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/airlines/${newFlight.airlineId}/flights`
      );
      dispatch({
        type: types.ADD_FLIGHT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateFlight = (updatedFlight) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/flights/${updatedFlight.id}`,
      updatedFlight
    );

    dispatch({
      type: types.UPDATE_FLIGHT,
      payload: { updatedFlight: res.data },
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
