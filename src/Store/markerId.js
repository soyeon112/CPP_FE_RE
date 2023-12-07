import { createSlice } from '@reduxjs/toolkit';

const initialMarkerIdState = { markerId: '' };
const markerSlice = createSlice({
  name: 'marker',
  initialState: initialMarkerIdState,
  reducers: {
    selected(state, action) {
      state.markerId = action.payload;
    },
  },
});
export const MarkerIdAction = markerSlice.actions;
export default markerSlice.reducer;
