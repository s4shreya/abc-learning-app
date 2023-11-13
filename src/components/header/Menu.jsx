import styles from './Header.module.css';

const Menu = () => {
  return (
    <nav>
        <ul className={`${styles.menu} ${styles["menu-navbar"]}`}>
            <li>Subjects</li>
            <li>Courses</li>
            <li>About Us</li>
        </ul>
    </nav>
  )
}
export default Menu