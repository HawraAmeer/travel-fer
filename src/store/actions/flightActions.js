import instance from "./instance";

import * as types from "./types";

//----------Fetch All Flights----------//
export const fetchFlights = () => async (dispatch) => {
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

//----------Fetch Airline Flights----------//
export const airlineFlights = (airlineId) => async (dispatch) => {
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

//----------Add New Flight----------//
export const addFlight = (newFlight) => async (dispatch) => {
  try {
    const res = await instance.post(
      `/airlines/${newFlight.airlineId}/flights`,
      newFlight
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
export const updateFlight = (upatedFlight) => async (dispatch) => {
  try {
    const res = await instance.put(`/flights/${upatedFlight.id}`, upatedFlight);

    dispatch({
      type: types.UPDATE_FLIGHT,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

//----------SEARCH FLIGHT----------//
export const searchFlight = (flight) => async (dispatch) => {
  try {
    const res = await instance.post("/flights/search", flight);

    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
