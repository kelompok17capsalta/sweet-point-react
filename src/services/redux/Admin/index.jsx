import { createSlice } from '@reduxjs/toolkit';

// Services
import Token from '../../localStorage/Token';

const initialState = {
  value: Token.getAdminToken() ? true : null,
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
