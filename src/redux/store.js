import { configureStore } from "@reduxjs/toolkit";
import addComment from "./addComment";
import addReplay from "./addReplay";

export default configureStore({
  reducer: {
    addNewComment: addComment,
    addReplay: addReplay,
  },
});
