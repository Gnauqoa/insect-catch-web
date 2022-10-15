import { createSlice } from "@reduxjs/toolkit";

const deviceControlDataSlice = createSlice({
  name: "deviceControlData",
  initialState: {
    name: "",
    battery: 50,
    coordinates: {
      latitude: "",
      longitude: ""
    }
  },
  reducers: {
    updateDeviceControlData: (state, data) => {
      return data.payload;
    },
  },
});

export const { updateDeviceControlData } = deviceControlDataSlice.actions;
export default deviceControlDataSlice.reducer;
