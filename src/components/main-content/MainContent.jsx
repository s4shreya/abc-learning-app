import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styles from "./Main.module.css";
import SubjectCard from "./SubjectCard";

const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const [loadedSubjects, setLoadedSubjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://learning-app-15eb1-default-rtdb.asia-southeast1.firebasedatabase.app/subjects.json"
      )
      .then((data) => {
        const subjects = [];
        for (const key in data.data) {
          const subject = {
            id: key,
            ...data.data[key],
          };
          subjects.push(subject);
        }
        setLoading(false);
        setLoadedSubjects(subjects);
      });
  }, []);

  return (
    <main className={styles.container}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        loadedSubjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))
      )}
        {/* <Link to="/add-subject">
          <AddCircleOutlineIcon />
        </Link> */}
    </main>
  );
};
export default MainContent;
