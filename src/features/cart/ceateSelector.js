import { createSelector } from '@reduxjs/toolkit';

const cartSelector = (state) => state.cart.cartItems;

export const countCart = createSelector(cartSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const totalCart = createSelector(cartSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)
);
