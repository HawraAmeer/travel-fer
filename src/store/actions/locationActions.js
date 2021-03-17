import instance from "./instance";
import * as types from "./types";

export const fetchLocations = () => async (dispatch) => {
  try {
    const response = await instance.get("/locations");
    dispatch({ type: types.FETCH_LOCATIONS, payload: response.data });
  } catch (error) {
    console.log("Error:", error);
  }
};
