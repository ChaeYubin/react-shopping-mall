import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setAllProducts(state, action) {
      const products = action.payload.products.map((product) => {
        return {
          ...product,
          wish: false,
        };
      });

      state.products = products;
    },
  },
});

export const { setAllProducts } = productSlice.actions;
export default productSlice.reducer;
