import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./features/test/testReducer";

export const store = configureStore({
  reducer: { test: testReducer },
});
