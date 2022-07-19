import { createSlice } from '@reduxjs/toolkit';

// Utils
import ProductHelper from '../../../utils/ProductHelper';

const initialState = {
  data: [],
  search: '',
  category: '',
  result: [],
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    // eslint-disable-next-line no-return-assign
    updateProductList: (state, { payload: data }) => state = {
      ...state,
      data,
      result: ProductHelper.formatList(data, {
        ...state,
        category: state.category,
      }),
    },
    updateCategory: (state, { payload: category }) => ({
      ...state,
      category,
      result: ProductHelper.formatList(state.data, {
        ...state,
        category,
      }),
    }),
    searchProduct: (state, { payload: search }) => ({
      ...state,
      search,
      result: ProductHelper.formatList(state.data, {
        ...state,
        search,
      }),
    }),
  },
});

export const {
  updateProductList,
  updateCategory,
  searchProduct,
} = productListSlice.actions;

export default productListSlice.reducer;
