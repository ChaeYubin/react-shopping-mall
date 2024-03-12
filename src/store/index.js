import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import cartReducer from "./cartSlice.js";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
