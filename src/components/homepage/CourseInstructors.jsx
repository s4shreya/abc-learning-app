import styles from "./CourseInstructors.module.css";
import person from '../../images/person2.png';

const CourseInstructors = () => {
  const instructors = [];
  for (let i = 0; i < 4; i++) {
    instructors.push(
      <div className={styles.card} key={i}>
        <h2>Instructor{i+1}</h2>
        <img src={person} height={100} width={100} alt="instructor" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    );
  }
  return (
    <div>
      <h3 className={styles.heading}>Course Instructors</h3>
      <div className={styles.cards}>{instructors.map((instructor) => instructor)}</div>
    </div>
  );
};
export default CourseInstructors;
