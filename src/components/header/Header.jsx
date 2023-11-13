import Logo from "./Logo";
import Menu from "./Menu";
import SignUp from "./SignUp";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <Menu />
      <SignUp />
    </header>
  );
};
export default Header;
