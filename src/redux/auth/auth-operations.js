import { createAsyncThunk } from '@reduxjs/toolkit';

import * as authRequest from 'api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const data = await authRequest.signupRequest(body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data._message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const data = await authRequest.loginRequest(body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.statusText);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const data = await authRequest.currentRequest(auth.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const data = await authRequest.logoutRequest();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
