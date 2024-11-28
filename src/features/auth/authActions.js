import axios from 'axios';
import { authRequest, authSuccess, authFailure } from './authSlice';

const BASE_URL = 'https://reqres.in/api';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post('https://reqres.in/api/login', {
      email: credentials.email,
      password: credentials.password,
    });

    // Log the response for debugging
    console.log('Login Response:', response.data);

    dispatch(authSuccess(response.data.token));

    // Return success to allow navigation
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    dispatch(authFailure(error.response?.data?.error || 'Login failed.'));
    return Promise.reject(error);
  }
};
export const registerUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email: credentials.email,
      password: credentials.password,
    });
    dispatch(authSuccess(response.data.token));

    // Return success to allow chaining
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(authFailure(error.response?.data?.error || 'Registration failed.'));
    return Promise.reject(error);
  }
};

  
