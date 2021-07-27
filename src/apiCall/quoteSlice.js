import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Resp from './axiosCall';

/* eslint-disable no-param-reassign */

const baseUri = 'https://your-favorite-quotes-api.herokuapp.com/quotes';

const favoriteUri = 'https://your-favorite-quotes-api.herokuapp.com/';

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
    thisLoaders: {},
    thisErrors: {},
    quote: { user: {}, favorited_by: [] },
  },
  extraReducers: {
    [getQuotes.fulfilled]: (state, action) => {
      state.quotes = action.payload;
    },
    [getQuote.fulfilled]: (state, action) => {
      state.quote = action.payload;
    },
    [addQuote.fulfilled]: (state, action) => {
      state.quotes.unshift(action.payload);
    },

    [deleteQuote.pending]: (state, action) => {
      state.thisLoaders.deleteQuote = action.meta.arg.id;
      state.thisErrors.deleteQuote = false;
    },
    [deleteQuote.fulfilled]: (state, action) => {
      state.quotes = state.quotes.filter(quote => quote.id !== action.payload.id);
      state.quote = { user: {}, favorited_by: [] };
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
    },
  },
});

export default quoteSlice.reducer;

/* eslint-enable no-param-reassign */
