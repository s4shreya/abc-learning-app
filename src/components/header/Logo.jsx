import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import styles from "./Header.module.css";

import { useDispatch } from "react-redux";
import { quizStatus } from "../../reducers/quizSlice";

const Logo = () => {
  const dispatch = useDispatch();
  return (
    <h2 className={styles.heading} onClick={() => dispatch(quizStatus(false))}>
      <Link to="/">
        Learning App
        <SchoolIcon />
      </Link>
    </h2>
  );
};
export default Logo;
