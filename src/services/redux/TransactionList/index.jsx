import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};


export const transactionListSlice = createSlice({
  name: 'transactionList',
  initialState,
  reducers: {
    updateTransactionList: (state, { payload: data }) => {
      state.data = data;
    },
  },
});

export const {
  updateTransactionList,
} = transactionListSlice.actions;

export default transactionListSlice.reducer;
