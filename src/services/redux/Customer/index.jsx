import { createSlice } from '@reduxjs/toolkit';

// Services
import Token from '../../localStorage/Token';

const initialState = {
  value: Token.getCustomerToken() ? true : null,
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    updateCustomer: (state, { payload: customer }) => {
      state.value = customer;
    },
  },
});

export const {
  updateCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;
