import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./features/test/testReducer";
import snackBarReducer from "./layout/auth/snackBarReducer";
import userDataReducer from "./features/home/reducer.js";
import deviceDataReducer from "./features/device/reducer.js";
import deviceControlDataReducer from "./features/deviceControl/reducer.js"

export const store = configureStore({
  reducer: {
    test: testReducer,
    snackBar: snackBarReducer,
    userData: userDataReducer,
    deviceData: deviceDataReducer,
    deviceControlData: deviceControlDataReducer
  },
});
