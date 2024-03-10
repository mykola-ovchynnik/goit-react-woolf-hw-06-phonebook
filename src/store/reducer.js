import persistReducer from 'redux-persist/es/persistReducer';
import { contactsReducer } from './contactsReducer/contactsSlice';
import { filterReducer } from './filterReducer/filterSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
