import styles from "./SubjectPage.module.css";

const Videos = ({ videos }) => {
  const videoList = [];
  for (let i = 0; i < 10; i++) {
    videoList.push(
      <article className={styles.card} key={i}>
        <iframe width={450} height={300} src={videos.url}></iframe>
        <div className={styles["card-content"]}>
          <h3>{videos.name}</h3>
          <ul className={styles.skills}>
            {videos.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p className={styles["card-footer"]}>
            <span>Duration: {videos.duration}</span>
            <span>Level: {videos.level}</span>
          </p>
        </div>
      </article>
    );
  }

  return <div className={styles.container}>{videoList}</div>;
};
export default Videos;
