import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showCartFeatures(state) {
      state.showCart = true;
    },
    hideCartFeatures(state) {
      state.showCart = false;
    },
    addToCart(state, action) {
      const { id, quantity } = action.payload;
      const indexCart = state.cartItems.findIndex((x) => x.id === id);
      if (indexCart <= 0) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[indexCart].quantity = quantity;
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const indexCart = state.cartItems.findIndex((x) => x.id === id);

      // check if product is available in cart
      if (indexCart >= 0) {
        state.cartItems[indexCart].quantity = quantity;
      }
    },
    removeCart(state, { id }) {
      state.cartItems = state.cartItems.filter((x) => x.id !== id);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showCartFeatures, hideCartFeatures, addToCart, setQuantity, removeCart } = actions;
export default reducer;
