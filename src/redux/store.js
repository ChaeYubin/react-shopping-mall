import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product.js";
import cartReducer from "./cart.js";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
