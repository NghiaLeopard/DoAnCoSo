import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import categoryReducer from '../features/Product/components/Filters/categorySlice';

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  category: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
