import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    name: "",
    job: "",
    deviceList: [],
  },
  reducers: {
    updateUserData: (state, data) => {
      return data.payload
    },
  },
});

export const { updateUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
