import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import modalReducer from './modal';
const store = configureStore({
  reducer: { auth: authReducer, modal: modalReducer },
});

export default store;
