import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const product = action.payload;
      product.count = 1;

      state.products.push(product);

      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    remove: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );

      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    clear: (state) => {
      state.products = [];
    },
    increaseCount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return product.count++;
        }
        return product;
      });
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
    decreaseCount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return product.count--;
        }
        return product;
      });
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.count,
        0
      );
    },
  },
});

export const { add, remove, clear, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
