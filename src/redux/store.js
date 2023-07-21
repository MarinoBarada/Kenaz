import { configureStore } from "@reduxjs/toolkit";
import addComment from "./addComment";

export default configureStore({
  reducer: {
    addNewComment: addComment,
  },
});
