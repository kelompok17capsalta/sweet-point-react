import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  startDate: null,
  endDate: null,
  result: [],
};


export const transactionListSlice = createSlice({
  name: 'transactionList',
  initialState,
  reducers: {
    updateTransactionList: (state, { payload: data }) => {
      return state = {
        ...state,
        data,
        // result: ProductHelper.formatList(data, {
        //   ...state,
        //   category: state.category,
        // }),
      };
    },
    updateFilter: (state, { payload: { start, end } }) => {
      return {
        ...state,
        start,
        end,
        // result: ProductHelper.formatList(state.data, {
        //   ...state,
        //   category
        // }),
      };
    },
  },
});

export const {
  updateTransactionList,
  updateFilter,
} = transactionListSlice.actions;

export default transactionListSlice.reducer;
