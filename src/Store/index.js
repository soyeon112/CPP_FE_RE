import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import modalReducer from './modal';
import markerIdReducer from './markerId';
import geolocationReducer from './geolocation';

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    marker: markerIdReducer,
    geolocation: geolocationReducer,
  },
});

export default store;
