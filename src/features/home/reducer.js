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
      state.uid = data.payload.uid;
      state.token = data.payload.token;
    },
  },
});

export const { updateUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
