import { useState } from "react";
import { useSelector } from "react-redux";

import Videos from "./Videos";
import Articles from "./Articles";
import styles from './SubjectPage.module.css';

const SubjectPage = ({ name }) => {
  const [selectedTab, setSelectedTab] = useState("videos");

  const subjectDetails = useSelector((state) => state.subject);

  return (
    <>
    <nav className={styles.menu}>
        <button onClick={() => setSelectedTab("videos")}>Videos</button>
        <button onClick={() => setSelectedTab("articles")}>Articles</button>
    </nav>
      {selectedTab === "videos" ? (
        <Videos videos={subjectDetails.videos} />
      ) : (
        <Articles articles={subjectDetails.articles} />
      )}
    </>
  );
};
export default SubjectPage;
