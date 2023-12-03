
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // root key in storage
  storage, // specify storage
  // Optionally, you can blacklist or whitelist specific reducers:
  // blacklist: ['someReducer'],
  // whitelist: ['someReducer'],
};

// Wrap the contactsReducer with the persistReducer
const persistedReducer = persistReducer(persistConfig, contactsReducer);

// Create the Redux store with the persisted reducer
const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

// Create a persistor object
const persistor = persistStore(store);

export { store, persistor };
