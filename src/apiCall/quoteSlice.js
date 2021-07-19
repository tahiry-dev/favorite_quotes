import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Resp from './axiosCall';

/* eslint-disable no-param-reassign */

const baseUri = 'http://localhost:5000/quotes';

const favoriteUri = 'http://localhost:5000';

export const getQuotes = createAsyncThunk('quote/getQuotes', async () => {
  const response = await Resp.get(baseUri);
  return response.data;
});

export const getQuote = createAsyncThunk('quote/getQuote', async id => {
  const response = await Resp.get(`${baseUri}/${id}`);
  return response.data;
});

export const addQuote = createAsyncThunk(
  'quote/addQuote',
  async (formData, { rejectWithValue }) => {
    try {
      const headers = { token: localStorage.getItem('currentUser') };
      const response = await Resp.post(baseUri, formData, headers);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteQuote = createAsyncThunk('quote/deleteQuote', async id => {
  const headers = { token: localStorage.getItem('currentUser') };
  const response = await Resp.delete(`${baseUri}/${id}`, { headers });
  return response.data;
});

export const favorite = createAsyncThunk('quote/favorite', async ({ id, type, currentUser }) => {
  const headers = { token: localStorage.getItem('currentUser') };
  await Resp.put(`${favoriteUri}/${id}/favorite`, { type, quote: currentUser.user_id }, { headers });

  return { id, type, currentUser };
});

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quotes: [],
    loaders: {},
    errors: {},
    filters: {},
    quote: { user: {}, favorited_by: [] },
  },
  extraReducers: {
    [getQuotes.pending]: state => {
      state.loaders.loadingQuotes = true;
      state.errors.loadingQuotes = false;
    },
    [getQuotes.fulfilled]: (state, action) => {
      state.quotes = action.payload;
      state.loaders.loadingQuotes = false;
      state.errors.loadingQuotes = false;
    },
    [getQuotes.rejected]: (state, action) => {
      state.errors.loadingQuotes = action.error.message;
      state.loaders.loadingQuotes = false;
    },
    [getQuote.pending]: state => {
      state.loaders.loadingQuote = true;
      state.errors.loadingQuote = false;
    },
    [getQuote.fulfilled]: (state, action) => {
      state.quote = action.payload;
      state.loaders.loadingQuote = false;
      state.errors.loadingQuote = false;
    },
    [getQuote.rejected]: (state, action) => {
      state.errors.loadingQuote = action.error.message;
      state.loaders.loadingQuote = false;
    },
    [addQuote.pending]: state => {
      state.loaders.addQuote = true;
      state.errors.addQuote = false;
    },
    [addQuote.fulfilled]: (state, action) => {
      state.quotes.unshift(action.payload);
      state.loaders.addQuote = false;
      state.errors.addQuote = false;
    },
    [addQuote.rejected]: (state, action) => {
      state.errors.addQuote = action.payload;
      state.loaders.addQuote = false;
    },
    [deleteQuote.pending]: (state, action) => {
      state.loaders.deleteQuote = action.meta.arg.id;
      state.errors.deleteQuote = false;
    },
    [deleteQuote.fulfilled]: (state, action) => {
      state.quotes = state.quotes.filter(quote => quote.id !== action.payload.id);
      state.quote = { user: {}, favorited_by: [] };
      state.loaders.deleteQuote = false;
      state.errors.deleteQuote = false;
    },
    [deleteQuote.rejected]: (state, action) => {
      state.errors.deleteQuote = action.payload;
      state.loaders.deleteQuote = false;
    },
    [favorite.pending]: state => {
      state.loaders.favorite = true;
      state.errors.favorite = false;
    },
    [favorite.fulfilled]: (state, action) => {
      const { id, type, currentUser } = action.payload;
      state.quotes.map(quote => {
        if (quote.id === id) {
          if (type === 'favorite') {
            quote.favorited_by.push(currentUser);
            state.quote.favorited_by.push(currentUser);
          } else {
            quote.favorited_by = quote.favorited_by.filter(
              favorite => favorite.id !== currentUser.id,
            );
            state.quote.favorited_by = state.quote.favorited_by.filter(
              favorite => favorite.id !== currentUser.id,
            );
          }

          return quote;
        }
        return quote;
      });
      state.loaders.favorite = false;
      state.errors.favorite = false;
    },
    [favorite.rejected]: (state, action) => {
      state.errors.favorite = action.error.message;
      state.loaders.favorite = false;
    },
  },
});

export default quoteSlice.reducer;
/* eslint-enable no-param-reassign */
