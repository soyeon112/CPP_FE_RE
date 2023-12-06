import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuth: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
      console.log('로그인', state.isAuth);
    },
    logout(state) {
      state.isAuth = false;
      console.log('로그아웃', state.isAuth);
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
