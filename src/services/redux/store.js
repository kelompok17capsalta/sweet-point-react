import { configureStore } from '@reduxjs/toolkit';

// Reducers from Slice
import customerReducer from './Customer';
import AdminReducer from './Admin';

const store = configureStore({
  reducer: {
    customer: customerReducer,
    admin: AdminReducer,
  },
});

export default store;
