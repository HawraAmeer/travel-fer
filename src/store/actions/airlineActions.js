import * as types from "./types";
import instance from "./instance";

export const fetchAirlines = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/airlines");
      dispatch({
        type: types.FETCH_AIRLINE,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
