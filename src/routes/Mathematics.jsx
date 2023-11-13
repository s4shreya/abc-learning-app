import { Link } from "react-router-dom";
import SubjectPage from "../components/SubjectPage";
import styles from '../styles/styles.module.css';

const Mathematics = () => {
  return (
    <div>
      <p className={styles["quiz-button"]}><Link to={"/quiz"}>Attempt Quiz</Link></p>
      <SubjectPage />
    </div>
  );
};
export default Mathematics;
