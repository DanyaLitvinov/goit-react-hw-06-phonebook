import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: [],
  reducers: {
    setContact(state, action) {
      state.unshift(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contactsList;
