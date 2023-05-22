import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer.js";
import loginStatusReducer from "./loginStatusReducer.js";
import deviceListReducer from "./deviceListReducer.js";

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    loginStatus: loginStatusReducer,
    deviceList: deviceListReducer,
  },
});
