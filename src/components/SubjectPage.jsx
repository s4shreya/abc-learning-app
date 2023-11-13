import { useEffect, useState } from "react";
import Videos from "./Videos";
import Articles from "./Articles";
import axios from "axios";

const SubjectPage = ({name}) => {
  const [selectedTab, setSelectedTab] = useState("videos");
  const [loading, setLoading] = useState(true);
  const [loadedSubjectDetails, setLoadedSubjectDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get();
  }, []);
  const subjectDetails = props.subject;

  return <>{selectedTab === "videos" ? <Videos /> : <Articles />}</>;
};
export default SubjectPage;
