import { createSlice } from '@reduxjs/toolkit';

const initialModalState = { isModal: false };
const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    open(state) {
      state.isModal = true;
      console.log('open', state.isModal);
    },
    close(state) {
      state.isModal = false;
      console.log('close', state.isModal);
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
