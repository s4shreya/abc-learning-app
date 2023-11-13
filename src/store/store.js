import { configureStore } from "@reduxjs/toolkit";
import subjectDetailsReducer from "../reducers/subjectDetailsSlice";
import quizReducer from "../reducers/quizSlice";

export const store = configureStore({
  reducer: {
    subject: subjectDetailsReducer,
    quiz: quizReducer,
  },
});
