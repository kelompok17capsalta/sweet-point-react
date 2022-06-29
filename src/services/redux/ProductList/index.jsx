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
    updateProductList: (state, { payload: data }) => {
      return state = {
        ...state,
        data,
        result: ProductHelper.formatList(data, {
          ...state,
          category: state.category,
        }),
      };
    },
    updateCategory: (state, { payload: category }) => {
      return {
        ...state,
        category,
        result: ProductHelper.formatList(state.data, {
          ...state,
          category
        }),
      };
    },
    searchProduct: (state, { payload: search }) => {
      return {
        ...state,
        search,
        result: ProductHelper.formatList(state.data, {
          ...state,
          search,
        }),
      };
    },
  },
});

export const {
  updateProductList,
  updateCategory,
  searchProduct,
} = productListSlice.actions;

export default productListSlice.reducer;
