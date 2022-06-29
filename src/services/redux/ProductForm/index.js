import { createSlice } from '@reduxjs/toolkit';

// Utils
import ProductHelper from '../../../utils/ProductHelper';

const initialState = {
  value: {
    product_name: '',
    denom: 0,
    category: '',
    descriptions: '',
    image: null,
    points: 0,
    stock: 0,
  },
};


export const productFormSlicer = createSlice({
  name: 'ProductForm',
  initialState,
  reducers: {
    updateProductForm: (state, { payload }) => {
     state.value = payload;
    },
    updateProductField: (state, { payload }) => {
      if (payload.denom || payload.points || payload.stock) {
        payload.denom = ProductHelper.formatNumber(payload.denom) || state.value.denom;
        payload.points = ProductHelper.formatNumber(payload.points) || state.value.points;
        payload.stock = ProductHelper.formatNumber(payload.stock) || state.value.stock;
      }

      return {
        value: {
          ...state.value,
          ...payload,
        }
      }
    },
    resetProductForm: (state) => {
      return initialState;
    },
  },
});

export const {
  updateProductForm,
  updateProductField,
  resetProductForm,
} = productFormSlicer.actions;

export default productFormSlicer.reducer;
