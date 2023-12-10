import { createSlice } from '@reduxjs/toolkit';

const initialGeolocation = { lat: 0, lng: 0 };
const geoSlice = createSlice({
  name: 'geo',
  initialState: initialGeolocation,
  reducers: {
    getGeo(state, action) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      console.log(state.lat, state.lng);
    },
  },
});

export const GeoAction = geoSlice.actions;
export default geoSlice.reducer;
