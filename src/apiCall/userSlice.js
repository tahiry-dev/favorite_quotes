import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
/* eslint-disable no-param-reassign */
const baseUri = 'http://localhost:5000/api/v1';

export const login = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${baseUri}/login`, data);
    const user = jwt_decode(response.data.token);
    const { headers } = response;
    const header = {
      'access-token': headers['access-token'],
      client: headers.client,
      uid: headers.uid,
    };
    localStorage.setItem('currentUser', JSON.stringify(response.data.token));

    return { user, header };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const signUp = createAsyncThunk('user/signup', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${baseUri}/signup`, data);
    const user = jwt_decode(response.data.token);
    const { headers } = response;
    const header = {
      'access-token': headers['access-token'],
      client: headers.client,
      uid: headers.uid,
    };
    localStorage.setItem('currentUser', JSON.stringify(response.data.token));

    return { user, header };
  } catch (error) {
    return rejectWithValue(error.response.data.errors.full_messages);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loaders: {},
    errors: {},
    loggedIn: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('currentUser');
      state.user = {};
      state.headers = {};
      state.loggedIn = false;
    },
    loginFromStorage: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loaders.login = true;
      state.errors.login = false;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.loggedIn = true;
      state.loaders.login = false;
      state.errors.login = false;
    },
    [login.rejected]: (state, action) => {
      const serverError = 'Server error';
      state.errors.login = action.payload ? action.payload.errors : serverError;
      state.loaders.login = false;
    },
    [signUp.pending]: (state) => {
      state.loaders.signUp = true;
      state.errors.signUp = false;
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.loggedIn = true;
      state.loaders.signUp = false;
      state.errors.signUp = false;
    },
    [signUp.rejected]: (state, action) => {
      const serverError = 'Server error';
      state.errors.login = action.payload ? action.payload : serverError;
      state.loaders.signUp = false;
    },
  },
});

export const { logout, loginFromStorage } = userSlice.actions;

export default userSlice.reducer;
/* eslint-enable no-param-reassign */
