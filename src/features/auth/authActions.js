import axios from 'axios';
import { authRequest, authSuccess, authFailure } from '../../redux/authSlice';

const BASE_URL = 'https://reqres.in/api';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
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
    
  }
};
export const registerUser = (credentials) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email: credentials.email,
      password: credentials.password,
    });
    dispatch(authSuccess(response.data.token));

    // Return success to allow chaining
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(authFailure(error.response?.data?.error + " This is a demo account kindly use this credentials to register email : eve.holt@reqres.in , password : password123" || 'Registration failed.'));
  
  }
};

  
