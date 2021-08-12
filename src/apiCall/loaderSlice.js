import { createSlice } from '@reduxjs/toolkit';
import {
  getQuotes, getQuote, deleteQuote, addQuote, favorite,
} from './quoteSlice';

/* eslint-disable no-param-reassign */
export const loaderSlice = createSlice({
  name: 'loaders',
  initialState: {
    quoteLoaders: {},
  },
  extraReducers: {
    [getQuotes.pending]: state => {
      state.quoteLoaders.loadingQuotes = true;
    },
    [getQuotes.fulfilled]: state => {
      state.quoteLoaders.loadingQuotes = false;
    },
    [getQuotes.rejected]: state => {
      state.quoteLoaders.loadingQuotes = false;
    },
    [getQuote.pending]: state => {
      state.quoteLoaders.loadingQuote = true;
    },
    [getQuote.fulfilled]: state => {
      state.quoteLoaders.loadingQuote = false;
    },
    [getQuote.rejected]: state => {
      state.quoteLoaders.loadingQuote = false;
    },
    [addQuote.pending]: state => {
      state.quoteLoaders.addQuote = true;
    },
    [addQuote.fulfilled]: state => {
      state.quoteLoaders.addQuote = false;
    },
    [addQuote.rejected]: state => {
      state.quoteLoaders.addQuote = false;
    },
    [deleteQuote.fulfilled]: state => {
      state.quoteLoaders.deleteQuote = false;
    },
    [deleteQuote.rejected]: state => {
      state.quoteLoaders.deleteQuote = false;
    },
    [favorite.pending]: state => {
      state.quoteLoaders.favorite = true;
    },
    [favorite.fulfilled]: state => {
      state.quoteLoaders.favorite = false;
    },
    [favorite.rejected]: state => {
      state.quoteLoaders.favorite = false;
    },
  },
});
export default loaderSlice.reducer;
/* eslint-enable no-param-reassign */
