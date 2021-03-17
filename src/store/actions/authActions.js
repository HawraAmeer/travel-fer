import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";

import * as types from "../actions/types";

// CHECK TOKEN
export const checkForToken = () => (dispatch) => {
  const token = Cookies.get("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) dispatch(setUser(token));
    else dispatch(signout());
  }
};

// SET USER
const setUser = (token) => {
  Cookies.set("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return { type: types.SET_USER, payload: decode(token) };
};

// SIGN IN
export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    dispatch(setUser(res.data.token));
    history.goBack();
  } catch (error) {
    console.log("Error: ", error);
  }
};

// SIGN UP
export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", newUser);
    dispatch(setUser(res.data.token));
    history.replace("/");
  } catch (error) {
    console.log("Error: ", error);
  }
};

// SIGN OUT
export const signout = () => {
  Cookies.remove("token");
  delete instance.defaults.headers.common.Authorization;
  return { type: types.SET_USER, payload: null };
};

// UPDATE INFO
export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    const res = await instance.put(`/`, updatedUser);
    dispatch(setUser(res.data.token));
  } catch (error) {
    console.log("Error: ", error);
  }
};

// FETCH HISTORY
export const fetchHistory = () => async (dispatch) => {
  try {
    const res = await instance.get(`/`);
    dispatch({ type: types.FETCH_HISTORY, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};
