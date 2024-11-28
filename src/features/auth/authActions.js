import axios from 'axios';
import { authRequest, authSuccess, authFailure } from './authSlice';

const BASE_URL = 'https://reqres.in/api';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    dispatch(authSuccess(response.data.token));
  } catch (error) {
    dispatch(authFailure('Invalid login credentials'));
  }
};

export const registerUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post(`${BASE_URL}/register`, credentials);
    dispatch(authSuccess(response.data.token));
  } catch (error) {
    dispatch(authFailure('Registration failed'));
  }
};
