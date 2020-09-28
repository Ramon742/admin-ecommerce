import api from '../../utils/api';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './user-types';

// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth-admin');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

  } catch (err) {
    
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = formData => async dispatch => {
  try {
    const res = await api.post('/users-admin', formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Add Image
export const addImage = file => async dispatch => {
  try {
    const formData = { file };

    await api.post('/users/upload', formData);

  } catch (err) {
    console.log(err);
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const body = { email, password };

  try {
    const res = await api.post('/auth-admin', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

  } catch (err) {
    console.log(err);

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });