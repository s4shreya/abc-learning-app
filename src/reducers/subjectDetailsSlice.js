import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [
    {
      name: "Learning Fractions",
      url: "https://www.youtube.com/watch?v=n0FZhQ_GkKw",
      duration: "4 hrs",
      level: "Beginner",
      skills: ["mathematics", "problem-solving", "calculations"],
    },
  ],
  articles: [
    {
      name: "Fractions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      duration: "5 min read",
      author: "Shreya Dhingra",
      tags: ["dummy", "text"],
    },
  ],
};

export const subjectDetailsSlice = createSlice({
  name: "subject-details",
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.videos.push(action.payload);
    },
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
  },
});

export const { addArticle, addVideo } = subjectDetailsSlice.actions;

export default subjectDetailsSlice.reducer;
