import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItem: [],
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
      const indexCart = state.cartItem.findIndex((x) => x.id === id);
      if (indexCart <= 0) {
        state.cartItem.push(action.payload);
      } else {
        state.cartItem[indexCart].quantity = quantity;
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const indexCart = state.cartItem.findIndex((x) => x.id === id);

      // check if product is available in cart
      if (indexCart >= 0) {
        state.cartItem[indexCart].quantity = quantity;
      }
    },
    removeCart(state, { id }) {
      state.cartItem = state.cartItem.filter((x) => x.id !== id);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showCartFeatures, hideCartFeatures } = actions;
export default reducer;
