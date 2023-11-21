import styles from "./Homepage.module.css";
import CourseCategories from "./homepage/CourseCategories";

const Homepage = () => {
  const circles = ["I-V", "VI-VIII", "IX-X", "XI-XII"];

  return (
    <div>
      <CourseCategories />
      <div className={styles["circle-container"]}>
        {circles.map((circle, index) => (
          <div key={index} className={styles.circle}>
            <p>{circle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Homepage;
