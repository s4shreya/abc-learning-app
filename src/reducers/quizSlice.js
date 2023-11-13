import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizSubmitted: false,
  submittedAnswersList: [],
  questionsList: [
    {
      no: 1,
      text: "What is the function used to lookup a value in a table and return a corressponding value from the same row?",
      options: [
        { answer: "MATCH", correct: false },
        { answer: "INDEX", correct: false },
        { answer: "HLOOKUP", correct: true },
        { answer: "VLOOKUP", correct: false },
      ],
    },
    {
      no: 2,
      text: "Which formula is NOT equivalent to all of the others?",
      options: [
        { answer: "=SUM(A3,A6)", correct: true },
        { answer: "=A3+A4+A5+A6", correct: false },
        { answer: "=SUM(A3:A6)", correct: false },
        { answer: "=SUM(A3,A4,A5,A6)", correct: false },
      ],
    },
    {
      no: 3,
      text: "Which of the following features allow you to narrow down the data in your work sheet?",
      options: [
        { answer: "Merge cells", correct: false },
        { answer: "Filters", correct: true },
        { answer: "Fill handle", correct: false },
        { answer: "Sorting", correct: false },
      ],
    },
    {
      no: 4,
      text: "What is the value of the MS Excel function: =FLOOR(14,4)?",
      options: [
        { answer: "10", correct: false },
        { answer: "13", correct: false },
        { answer: "14", correct: false },
        { answer: "12", correct: true },
      ],
    },
    {
      no: 5,
      text: "What is the value of the MS Excel function: =COUNT(1>2>3,2,0)?",
      options: [
        { answer: "1", correct: false },
        { answer: "0", correct: false },
        { answer: "3", correct: true },
        { answer: "5", correct: false },
      ],
    },
  ],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    quizStatus: (state, action) => {
      state.quizSubmitted = action.payload;
    },
    submittedAnswers: (state, action) => {
      state.submittedAnswersList = action.payload;
    },
  },
});

export const { quizStatus, submittedAnswers } = quizSlice.actions;

export default quizSlice.reducer;
