import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    uid: "",
    token: "",
  },
  reducers: {
    updateUserToken: (state, data) => {
      state.uid = data.payload.uid;
      state.token = data.payload.token;
    },
  },
});

export const { updateUserToken } = currentUserSlice.actions;
export default currentUserSlice.reducer;
