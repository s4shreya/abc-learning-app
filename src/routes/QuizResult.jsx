import { useLocation, useNavigate } from "react-router-dom";
import styles from "./QuizResult.module.css";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state.resultData;

  const showAnswers = () => {
    navigate("/quiz");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Quiz Result</h1>
        <div className={styles["result-msg"]}>
          <h5>You Scored:</h5>
          <h3>{result.percentage}%</h3>
          <p className={styles.message}>{result.message}</p>
          <p className={styles.quote}>
            Success is not final, failure is not fatal; It is the courage to
            continue that counts.
          </p>
        </div>
          <ul className={styles.col}>
            <li>Your Score</li>
            <li>
              {result.totalScore}/{result.totalQuestions}
            </li>
            <li>Avg: {result.totalScore} marks</li>
          </ul>
      </div>
      <button className={styles.btn} onClick={showAnswers}>
        Answers
      </button>
    </div>
  );
};
export default QuizResult;
