import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.js";
import productReducer from "./product.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
