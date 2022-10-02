import { createSlice } from "@reduxjs/toolkit";

import { REDUCER_PATH } from "./constant";

const initialState = { name: "Tri" };

const testSlice = createSlice({ name: REDUCER_PATH, initialState });

export default testSlice.reducer;
