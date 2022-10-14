import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./features/test/testReducer";
import snackBarReducer from "./layout/auth/snackBarReducer";
import currentUserTokenReducer from "./features/auth/login/reducer.js";

export const store = configureStore({
  reducer: {
    test: testReducer,
    snackBar: snackBarReducer,
    userToken: currentUserTokenReducer,
  },
});
