import styles from './Header.module.css';

const SignUp = () => {
  return (
    <nav>
      <ul className={`${styles["signup-list"]} ${styles.menu}`}>
        <li>Log in</li>
        <li>Sign up</li>
      </ul>
    </nav>
  )
}
export default SignUp