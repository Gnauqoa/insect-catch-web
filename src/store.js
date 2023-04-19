import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/auth/login/userReducer.js";
import loginStatusReducer from "features/auth/login/loginStatusReducer.js";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    loginStatus: loginStatusReducer,
  },
});
