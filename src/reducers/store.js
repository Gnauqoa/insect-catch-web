import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer.js";
import loginStatusReducer from "./loginStatusReducer.js";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    loginStatus: loginStatusReducer,
  },
});
