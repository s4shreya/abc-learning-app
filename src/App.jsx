import styles from "./App.module.css";
import Main from "./components/main-content/main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
