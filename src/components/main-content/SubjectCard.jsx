import styles from "./SubjectCard.module.css";

const SubjectCard = (props) => {
  const subject = props.subject;

  return (
    <article className={styles.card}>
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
