import Header from "./components/header/Header";
import styles from "./App.module.css";
import Main from "./components/main-content/main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
