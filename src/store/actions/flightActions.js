import instance from "./instance";
import * as types from "./types";

// SET FLIGHT
export const setFlight = (flight) => {
  return { type: types.SET_FLIGHT, payload: flight };
};

// SEARCH FLIGHT
export const searchFlight = (flight, type) => async (dispatch) => {
  try {
    const res = await instance.post("/flights/search", flight);
    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: { flights: res.data, searchFlight: flight, type },
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

// BOOK FLIGHT
export const bookFlight = (booking) => async () => {
  try {
    await instance.post("/booking", booking);
  } catch (error) {
    console.log("Error:", error);
  }
};

// FETCH AIRLINE FLIGHTS
export const airlineFlights = (airlineId) => async (dispatch) => {
  try {
    const res = await instance.get(`/airlines/${airlineId}/flights`);
    dispatch({ type: types.AIRLINE_FLIGHTS, payload: res.data });
  } catch (error) {
    console.log("Error:", error);
  }
};

// CREATE FLIGHT
export const createFlight = (newFlight) => async (dispatch) => {
  try {
    const res = await instance.post(
      `/airlines/${newFlight.airlineId}/flights`,
      newFlight
    );
    dispatch({ type: types.CREATE_FLIGHT, payload: res.data });
  } catch (error) {
    console.log("Error:", error);
  }
};

// UPDATE FLIGHT
export const updateFlight = (upatedFlight) => async (dispatch) => {
  try {
    const res = await instance.put(`/flights/${upatedFlight.id}`, upatedFlight);
    dispatch({ type: types.UPDATE_FLIGHT, payload: res.data });
  } catch (error) {
    console.log("Error:", error);
  }
};
