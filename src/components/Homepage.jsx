import styles from "./Homepage.module.css";
import CourseCategories from "./homepage/CourseCategories";
import Numbers from "./homepage/Numbers";

const Homepage = () => {
  const circles = ["I-V", "VI-VIII", "IX-X", "XI-XII"];

  return (
    <div>
      <div style={{height: 1000}}></div>
      <Numbers />
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
