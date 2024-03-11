import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.cartProduct.push(action.payload);
    },
    remove: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { add, remove } = accountSlice.actions;
export default accountSlice.reducer;
