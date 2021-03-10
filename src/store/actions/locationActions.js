import * as types from "./types";
import instance from "./instance";

export const fetchLocations = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/locations");
      dispatch({
        type: types.FETCH_LOCATION,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
