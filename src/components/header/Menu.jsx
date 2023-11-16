import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Menu = () => {
  return (
    <nav>
      <ul className={`${styles.menu} ${styles["menu-navbar"]}`}>
        <li className={styles.dropdown}>
          <button className={styles.dropbtn}>Subjects</button>
          <div className={styles["dropdown-content"]}>
            <Link to={"/mathematics"}>Mathematics</Link>
            <Link to={"/physics"}>Physics</Link>
            <Link to={"/chemistry"}>Chemistry</Link>
            <Link to={"/sanskrit"}>Sanskrit</Link>
            <Link to={"/english"}>English</Link>
            <Link to={"/hindi"}>Hindi</Link>
          </div>
        </li>
        <li><Link to="/courses">Courses</Link></li>
        <li>About Us</li>
        <li>
          <Link to={"/quiz"}>Quiz</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
