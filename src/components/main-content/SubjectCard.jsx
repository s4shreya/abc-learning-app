import { useNavigate } from "react-router-dom";

import styles from "./SubjectCard.module.css";

const SubjectCard = (props) => {
const navigate = useNavigate();

  const subject = props.subject;

  const subjectHandler = () => {
    const url = subject.name.toLowerCase();
    console.log(url);
    navigate(`/${url}`);
  };

  return (
    <article className={styles.card} onClick={subjectHandler}>
      <img src={subject.imageURL} width={400} height={250} />
      <div className={styles["card-content"]}>
        <h3>{subject.name}</h3>
        <p>{subject.description}</p>
        <p className={styles["card-footer"]}>
          <span>Videos: {subject.videosCount}</span>
          <span>Articles: {subject.articlesCount}</span>
        </p>
      </div>
    </article>
  );
};
export default SubjectCard;
