import styles from "./App.module.css";
import MainContent from "./components/main-content/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.container}>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
