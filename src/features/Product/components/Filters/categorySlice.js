import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    current: {},
  },
  reducers: {
    data(state, action) {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = categorySlice;
export const { data } = actions;
export default reducer;
