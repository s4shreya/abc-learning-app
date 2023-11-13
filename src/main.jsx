import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import { store } from "./store/store.js";
import "./index.css";
import Mathematics from "./routes/Mathematics.jsx";
import Physics from "./routes/Physics.jsx";
import Chemistry from "./routes/Chemistry.jsx";
import English from "./routes/English.jsx";
import Sanskrit from "./routes/Sanskrit.jsx";
import Quiz from "./routes/Quiz.jsx";
import QuizResult from "./routes/QuizResult.jsx";
import Hindi from "./routes/Hindi.jsx";
import AddSubject from "./components/main-content/AddSubject.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/mathematics",
        element: <Mathematics />,
      },
      {
        path: "/physics",
        element: <Physics />,
      },
      {
        path: "/chemistry",
        element: <Chemistry />,
      },
      {
        path: "/english",
        element: <English />,
      },
      {
        path: "/sanskrit",
        element: <Sanskrit />,
      },
      {
        path: "/hindi",
        element: <Hindi />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/quiz-result",
        element: <QuizResult />,
      },
      ,
      {
        path: "/add-subject",
        element: <AddSubject />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
