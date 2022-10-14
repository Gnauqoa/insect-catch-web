import { createSlice } from "@reduxjs/toolkit";

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState: {
    message: "",
    type: "",
    open: false,
  },
  reducers: {
    setSnackBar: (state, snackBarData) => {
      state.message = snackBarData.payload.message
      state.type = snackBarData.payload.type
      state.open = snackBarData.payload.open
    },
    resetSnackBar: (state) => {
      state.message = "";
      state.open = false;
      state.type = "success";
    },
  },
});

export const { setSnackBar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
