import { createSelector } from '@reduxjs/toolkit';

const cartSelector = (state) => state.cart.cartItems;

export const cartItemsCountSelector = createSelector(cartSelector, (cartItems) =>
  cartItems?.reduce((count, item) => count + item.quantity, 0)
);

export const cartItemsTotalSelector = createSelector(cartSelector, (cartItems) =>
  cartItems?.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);
