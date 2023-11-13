import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { quizStatus, submittedAnswers } from "../reducers/quizSlice";

import styles from "./DisplayedQuestion.module.css";

const DisplayedQuestion = (props) => {
  const [optionSelected, setOptionSelected] = useState("");
  const dispatch = useDispatch();

  const quizSubmitted = useSelector((state) => state.quiz.quizSubmitted);
  const submittedAnswersList = useSelector(
    (state) => state.quiz.submittedAnswersList
  );

  const question = props.displayQuestion;

  const nextQuestion = () => {
    props.handleNextQuestion();
  };
  const previousQuestion = () => {
    props.handlePreviousQuestion();
  };
  const handleSubmitQuiz = () => {
    dispatch(submittedAnswers(props.selectedAnswers));
    dispatch(quizStatus(true));
    props.submitQuiz();
  };
  const handleOptionSelection = (e) => {
    setOptionSelected(question.options[e.target.value].answer);
    props.optionSelected(question.no, e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.question}>
          Q.{question.no} {question.text}
        </p>
        <hr className={styles.ruler} />
        <ol
          type="A"
          className={
            quizSubmitted
              ? `${styles.disabled} ${styles.list}`
              : `${styles.list}`
          }
        >
          {question.options.map((option, i) => {
            return (
              <li
                key={i}
                className={
                  quizSubmitted && option.correct
                    ? styles.selected
                    : styles.option
                }
              >
                <label htmlFor={option.answer}>{option.answer}</label>
                <input
                  type="radio"
                  id={option.answer}
                  value={i}
                  name={question.no}
                  checked={
                    quizSubmitted
                      ? Number(submittedAnswersList[question.no - 1]) === i
                        ? true
                        : false
                      : Number(props.selectedAnswers[question.no - 1]) === i
                      ? true
                      : false
                  }
                  disabled={
                    quizSubmitted &&
                    Number(submittedAnswersList[question.no - 1]) !== i
                      ? true
                      : false
                  }
                  onChange={handleOptionSelection}
                  className={styles.radio}
                />
              </li>
            );
          })}
          {props.currentQuestion > 0 ? (
            <button
              onClick={previousQuestion}
              className={`${styles.btn} ${styles["prev-btn"]}`}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          {props.currentQuestion !== 4 ? (
            <button
              onClick={nextQuestion}
              className={`${styles.btn} ${styles["next-btn"]}`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              className={
                quizSubmitted
                  ? `${styles.btn} ${styles["submit-btn"]} ${styles.disabled}`
                  : `${styles.btn} ${styles["submit-btn"]}`
              }
              disabled={quizSubmitted ? true : false}
            >
              Submit
            </button>
          )}
        </ol>
      </div>
    </div>
  );
};

export default DisplayedQuestion;
