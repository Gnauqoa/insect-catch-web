import { createSlice } from "@reduxjs/toolkit";

const deviceListSlice = createSlice({
  name: "deviceList",
  initialState: null,
  reducers: {
    setDeviceList(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = deviceListSlice;
export const { setDeviceList } = actions;
export default reducer;
