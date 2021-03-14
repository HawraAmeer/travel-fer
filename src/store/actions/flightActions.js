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

//----------Fetch Airline Flights----------//
export const airlineFlights = (airlineId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/airlines/${airlineId}/flights`);
      dispatch({
        type: types.AIRLINE_FLIGHTS,
        payload: res.data,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

//----------Add New Flight----------//
export const addFlight = (newFlight) => async (dispatch) => {
  try {
    const res = await instance.post(
      `/airlines/${newFlight.airlineId}/flights`,
      newFlight
    );
    console.log(
      "🚀 ~ file: flightActions.js ~ line 42 ~ addFlight ~ res",
      res.data
    );

    dispatch({
      type: types.ADD_FLIGHT,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

//----------Update Flight----------//
export const updateFlight = (upatedFlight) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(
        `/flights/${upatedFlight.id}`,
        upatedFlight
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
