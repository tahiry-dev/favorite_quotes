import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../apiCall/quoteSlice';
import userReducer from '../apiCall/userSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
    user: userReducer,
  },
});
