import { createSlice } from '@reduxjs/toolkit';

const initialModalState = { isModal: false };
const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    open(state) {
      state.isModal = true;
    },
    close(state) {
      state.isModal = false;
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
