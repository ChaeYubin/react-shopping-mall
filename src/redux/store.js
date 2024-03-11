import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product.js";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
