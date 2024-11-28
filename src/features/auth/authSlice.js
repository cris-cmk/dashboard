import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.loading = false;
      state.token = action.payload;
    },
    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;
