import { createSlice } from "@reduxjs/toolkit";

export const addComment = createSlice({
  name: "addNewComment",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = addComment.actions;

export default addComment.reducer;
