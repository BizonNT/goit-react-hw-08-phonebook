import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contacsApi from 'api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contacsApi.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'fetch/addContact',
  async (body, thunkAPI) => {
    try {
      const data = await contacsApi.requestAddContact(body);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, phone }, { getState }) => {
      const {
        contacts: { items },
      } = getState();
      const arrayContacts = items.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      const arrayNumbers = items.find(
        contact => contact.phone.toLowerCase() === phone.toLowerCase()
      );
      if (arrayContacts) {
        alert(
          `${name} is already in contacts with number ${arrayContacts.phone}`
        );
        return false;
      }
      if (arrayNumbers) {
        alert(`${phone} is already in the contact ${arrayNumbers.name}`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'fetch/deleteContact',
  async (id, thunkAPI) => {
    try {
      await contacsApi.requestDeleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
