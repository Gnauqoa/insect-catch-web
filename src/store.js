import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./features/test/testReducer";
// import bookingsReducer from "./features/shops/detail/booking/reducer";

export const store = configureStore({
  reducer: { 
    test: testReducer, 
    // bookings: bookingsReducer 
  },
});
