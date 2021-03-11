import instance from "./instance";

import * as types from "./types";

//----------Fetch All Flights----------//
export const fetchFlight = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights");
      dispatch({
        type: types.FETCH_FLIGHTS,
        payload: res.data,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

//----------Add New Flight----------//
export const addFlight = (newFlight) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/airlines/${newFlight.airlineId}/flights`,
        newFlight
      );
      dispatch({
        type: types.ADD_FLIGHT,
        payload: res.data,
        airlineId: newFlight.airlineId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//----------Update Flight----------//
export const updateFlight = (UpatedFlight) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(
        `/flights/${UpatedFlight.id}`,
        UpatedFlight
      );

      dispatch({
        type: types.UPDATE_FLIGHT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
