import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  userEmail: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.auth = true;
      state.userEmail = action.payload;
    },
    logout: (state) => {
      state.auth = false;
      state.userEmail = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
