import { createSlice } from "@reduxjs/toolkit";

export const addReplay = createSlice({
  name: "addReplay",
  initialState: [],
  reducers: {
    replay: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { replay } = addReplay.actions;

export default addReplay.reducer;
