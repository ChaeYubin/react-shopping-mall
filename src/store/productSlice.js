import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
    },
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
