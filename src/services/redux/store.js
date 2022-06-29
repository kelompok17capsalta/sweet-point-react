import { configureStore } from '@reduxjs/toolkit';

// Reducers from Slice
import CustomerReducer from './Customer';
import AdminReducer from './Admin';
import UserListReducer from './UserList';
import ProductListReducer from './ProductList';
import ProductFormReducer from './ProductForm';

const store = configureStore({
  reducer: {
    customer: CustomerReducer,
    admin: AdminReducer,
    userList: UserListReducer,
    productList: ProductListReducer,
    productForm: ProductFormReducer,
  },
});

export default store;
