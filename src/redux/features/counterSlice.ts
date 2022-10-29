import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MakeState {
  value: {};
}

const initialState: MakeState = {
  value: "",
};

export const makeSlice = createSlice({
  name: "make",
  initialState,
  reducers: {
    makeToStore: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { makeToStore } = makeSlice.actions;

export default makeSlice.reducer;
