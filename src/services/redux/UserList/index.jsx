import { createSlice } from '@reduxjs/toolkit';

// Utils
import UserListHelper from '../../../utils/UserListHelper';

const initialState = {
  data: [],
  sortedBy: 'default',
  search: '',
  result: [],
};


export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    updateUserList: (state, { payload: data }) => {
      return state = {
        ...state,
        data,
        result: UserListHelper.format(data, state),
      };
    },
    sortUserList: (state, { payload: sortedBy }) => {
      return {
        ...state,
        sortedBy,
        result: UserListHelper.format(state.data, {
          ...state,
          sortedBy,
        }),
      };
    },
    searchUser: (state, { payload: search }) => {
      return {
        ...state,
        search,
        result: UserListHelper.format(state.data, {
          ...state,
          search,
        }),
      };
    },
  },
});

export const {
  updateUserList,
  sortUserList,
  searchUser,
} = userListSlice.actions;

export default userListSlice.reducer;
