import { configureStore } from "@reduxjs/toolkit";

// Reducers from Slice
import CustomerReducer from "./Customer";
import AdminReducer from "./Admin";
import UserListReducer from "./UserList";

const store = configureStore({
  reducer: {
    customer: CustomerReducer,
    admin: AdminReducer,
    userList: UserListReducer,
  },
});

export default store;
