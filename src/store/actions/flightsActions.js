import instance from "./instance";

import { FETCH_FLIGHTS, ADD_FLIGHT, UPDATE_FLIGHT } from "./types";

export const fetchFlights = () => async (dispatch) => {
  try {
    const response = await instance.get("/flights");
    dispatch({
      type: FETCH_FLIGHTS,
      payload: response.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const addFlight = (newFlight) => async (dispatch) => {
  // REVIW: Remove console logs when you're done from testing
  console.log(
    "🚀 ~ file: flightsActions.js ~ line 18 ~ addFlight ~ newFlight",
    newFlight
  );

  try {
    const formData = new FormData();
    for (const key in newFlight) formData.append(key, newFlight[key]);
    const res = await instance.post(
      `/airline/${newFlight.airlineId}/flights`,
      formData
    );
    dispatch({
      type: ADD_FLIGHT,
      payload: { newFlight: res.data },
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateFlight = (updatedFlight) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedFlight) formData.append(key, updatedFlight[key]);
    const res = await instance.put(`/flights/${updatedFlight.id}`, formData);

    dispatch({
      type: UPDATE_FLIGHT,
      payload: { updatedFlight: res.data },
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
