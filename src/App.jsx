import styles from "./App.module.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className={styles.container}>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
