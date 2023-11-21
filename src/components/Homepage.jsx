import styles from "./Homepage.module.css";
import CourseCategories from "./homepage/CourseCategories";
import ImageGallery from "./homepage/ImageGallery";
import Numbers from "./homepage/Numbers";

const Homepage = () => {
  const circles = ["I-V", "VI-VIII", "IX-X", "XI-XII"];

  return (
    <div>
      <ImageGallery />
      <CourseCategories />
      <Numbers />
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
