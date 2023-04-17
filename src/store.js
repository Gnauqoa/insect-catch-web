import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/auth/login/userReducer.js";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
  },
});
