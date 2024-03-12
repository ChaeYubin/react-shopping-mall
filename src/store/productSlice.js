import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "all",
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
      state.selectedCategory = "all";
      state.products = products;
    },
    addToCart(state, action) {
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            wish: true,
          };
        } else {
          return product;
        }
      });

      state.products = products;
    },
    removeFromCart(state, action) {
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            wish: false,
          };
        } else {
          return product;
        }
      });

      state.products = products;
    },
    selectCategory(state, action) {
      state.selectedCategory = action.payload.category;
    },
  },
});

export const { setAllProducts, addToCart, removeFromCart, selectCategory } =
  productSlice.actions;
export default productSlice.reducer;
