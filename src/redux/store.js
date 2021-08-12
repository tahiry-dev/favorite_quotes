import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../apiCall/quoteSlice';
import userReducer from '../apiCall/userSlice';
import loaderReducer from '../apiCall/loaderSlice';
import errorReducer from '../apiCall/errorSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
    user: userReducer,
    loader: loaderReducer,
    error: errorReducer,
  },
});
