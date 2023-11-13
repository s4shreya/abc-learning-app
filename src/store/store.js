import { configureStore } from "@reduxjs/toolkit";
import subjectDetailsReducer from "../reducers/subjectDetailsSlice";

export const store = configureStore({
  reducer: {
    subject: subjectDetailsReducer,
  },
});
