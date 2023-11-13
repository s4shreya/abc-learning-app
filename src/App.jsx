import styles from "./App.module.css";
import Main from "src/components/main-content/Main.jsx";
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
