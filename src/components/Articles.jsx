import styles from "./SubjectPage.module.css";

const Articles = ({ articles }) => {
  const articleList = [];
  for (let i = 0; i < 10; i++) {
    articleList.push(
      <article className={styles.card} key={i}>
        <div className={styles["card-content"]}>
          <h3>{articles.name}</h3>
          <p>{articles.description}</p>
          <ul className={styles.tags}>
            {articles.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <p className={styles["card-footer"]}>
            <span>Duration: {articles.duration}</span>
            <span>Author: {articles.author}</span>
          </p>
        </div>
      </article>
    );
  }

  return <div className={styles.container}>{articleList}</div>;
};
export default Articles;
