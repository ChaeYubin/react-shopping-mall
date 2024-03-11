import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: 1,
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload.category;
      state.products = action.payload.products;
    },
  },
});

export const { selectCategory } = productSlice.actions;
export default productSlice.reducer;
