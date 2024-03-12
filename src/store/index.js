import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import cartReducer from "./cartSlice.js";
import modalSliceReducer from "./modalSlice.js";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    modal: modalSliceReducer,
  },
});
