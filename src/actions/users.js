import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERSBYID_REQUEST,
  GET_USERSBYID_SUCCESS,
  GET_USERSBYID_FAILURE,
  CHANGEISOPEN,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,

} from "../constants/usersConstants";

import usersAPI from "../services/usersAPI";
export function getUserById(id) {
  return async (dispatch) => {
    dispatch({ type: GET_USERSBYID_REQUEST });
    try {
      const { data } = await usersAPI.getUserById(id);
      dispatch({
        type: GET_USERSBYID_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_USERSBYID_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function getUsers() {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_REQUEST });
    try {
      const { data } = await usersAPI.getUsers();
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function changeIsOpen(isOpen) {
  return {
    type: CHANGEISOPEN,
    payload: {
      isOpen,
    },
  };
}
export function updateUserById(value, id) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
      const result = await usersAPI.updateUserById(value, id);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { result },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function deleteUser(id) {
    return async (dispatch) => {
      dispatch({ type: DELETE_USER_REQUEST });
      try {
        const result = await usersAPI.deleteUser(id);
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: { result },
        });
      } catch (error) {
        dispatch({
          type: DELETE_USER_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
}
export function addUser(data) {
    return async (dispatch) => {
      dispatch({ type: ADD_USER_REQUEST });
      try {
        const result = await usersAPI.addUser(data);
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: { result },
        });
      } catch (error) {
        dispatch({
          type: ADD_USER_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
}