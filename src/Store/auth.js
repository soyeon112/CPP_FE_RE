import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuth: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
