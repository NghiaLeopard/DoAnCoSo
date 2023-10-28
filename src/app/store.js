import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import categoryReducer from '../features/Product/components/Filters/categorySlice';
import cartReducer from '../features/cart/cartSelector';

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
