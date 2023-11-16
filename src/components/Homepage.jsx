import styles from "./Homepage.module.css";

const Homepage = () => {
  const circles = ["I-V", "VI-VIII", "IX-X", "XI-XII"];

  return (
    <div className={styles["circle-container"]}>
      {circles.map((circle,index) => (
        <div key={index} className={styles.circle}><p>{circle}</p></div>
      ))}
    </div>
  );
};
export default Homepage;
