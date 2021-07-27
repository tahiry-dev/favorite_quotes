import { createSlice } from '@reduxjs/toolkit';
import {
  getQuotes, getQuote, deleteQuote, addQuote, favorite,
} from './quoteSlice';

/* eslint-disable no-param-reassign */
export const errorSlice = createSlice({
  name: 'errors',
  initialState: {
    errors: {},
  },
  extraReducers: {
    [getQuotes.pending]: state => {
      state.errors.loadingQuotes = false;
    },
    [getQuotes.fulfilled]: state => {
      state.errors.loadingQuotes = false;
    },
    [getQuotes.rejected]: (state, action) => {
      state.errors.loadingQuotes = action.error.message;
    },
    [getQuote.pending]: state => {
      state.errors.loadingQuote = false;
    },
    [getQuote.fulfilled]: state => {
      state.errors.loadingQuote = false;
    },
    [getQuote.rejected]: (state, action) => {
      state.errors.loadingQuote = action.error.message;
    },
    [addQuote.pending]: state => {
      state.errors.addQuote = false;
    },
    [addQuote.fulfilled]: state => {
      state.errors.addQuote = false;
    },
    [addQuote.rejected]: (state, action) => {
      state.errors.addQuote = action.payload;
    },
    [deleteQuote.pending]: state => {
      state.errors.deleteQuote = false;
    },
    [deleteQuote.fulfilled]: state => {
      state.errors.deleteQuote = false;
    },
    [deleteQuote.rejected]: (state, action) => {
      state.errors.deleteQuote = action.payload;
    },
    [favorite.fulfilled]: state => {
      state.errors.favorite = false;
    },
    [favorite.rejected]: (state, action) => {
      state.errors.favorite = action.error.message;
    },

  },
});
export default errorSlice.reducer;
/* eslint-enable no-param-reassign */
