import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
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
