import authReducer, {
    authRequest,
    authSuccess,
    authFailure,
    logout,
  } from './authSlice';
  
  const initialState = {
    token: null,
    loading: false,
    error: null,
  };
  
  describe('authSlice reducer', () => {
    it('should handle authRequest', () => {
      const state = authReducer(initialState, authRequest());
      expect(state.loading).toBe(true);
      expect(state.error).toBe(null);
    });
  
    it('should handle authSuccess', () => {
      const token = '12345';
      const state = authReducer(initialState, authSuccess(token));
      expect(state.loading).toBe(false);
      expect(state.token).toBe(token);
    });
  
    it('should handle authFailure', () => {
      const error = 'Login failed';
      const state = authReducer(initialState, authFailure(error));
      expect(state.loading).toBe(false);
      expect(state.error).toBe(error);
    });
  
    it('should handle logout', () => {
      const state = authReducer({ ...initialState, token: '12345' }, logout());
      expect(state.token).toBe(null);
    });
  });
  