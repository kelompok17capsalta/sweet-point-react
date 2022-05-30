import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    updateAdmin: (state, { payload: admin }) => {
      state.value = admin;
    },
  },
});

export const {
  updateAdmin,
} = adminSlice.actions;

export default adminSlice.reducer;
