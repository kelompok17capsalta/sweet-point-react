import { configureStore } from '@reduxjs/toolkit';

// Reducers from Slice
import userReducer from './User';
import AdminReducer from './Admin';

const store = configureStore({
  reducer: {
    user: userReducer,
    admin: AdminReducer,
  },
});

export default store;
