import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";

import * as types from "../actions/types";

const setUser = (token) => {
  Cookies.set("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

//----------SIGN IN----------//
export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

//----------SIGN UP----------//
export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

//----------SIGN OUT----------//
export const signout = () => {
  Cookies.remove("token");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = Cookies.get("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) {
      dispatch(setUser(token));
    } else {
      dispatch(signout());
    }
  }
};

//----------Update Profile----------//
export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    const res = await instance.put(`/`, updatedUser);
    dispatch(setUser(res.data.token));
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
