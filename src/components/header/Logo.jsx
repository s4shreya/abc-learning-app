import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import styles from "./Header.module.css";

const Logo = () => {
  return (
    <h2 className={styles.heading}>
      <Link to="/">
        Learning App
        <SchoolIcon />
      </Link>
    </h2>
  );
};
export default Logo;
