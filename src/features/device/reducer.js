import { createSlice } from "@reduxjs/toolkit";

const deviceDataSlice = createSlice({
  name: "deviceListData",
  initialState: {
    deviceData: [
    
    ]
  },
  reducers: {
    updateDeviceData: (state, data) => {
      state.deviceData = data.payload
    },
  },
});

export const { updateDeviceData } = deviceDataSlice.actions;
export default deviceDataSlice.reducer;
