import { configureStore } from "@reduxjs/toolkit";
import userReducer from "pages/auth/login/userReducer.js";
import loginStatusReducer from "pages/auth/login/loginStatusReducer.js";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    loginStatus: loginStatusReducer,
  },
});
