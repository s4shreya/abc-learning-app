import styles from "./CourseCategories.module.css";

import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HtmlIcon from "@mui/icons-material/Html";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import WebhookIcon from "@mui/icons-material/Webhook";
import ScoreIcon from "@mui/icons-material/Score";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const CourseCategories = () => {
  const courses = [
    {
      name: "Web Development",
      icon: <HtmlIcon />,
    },
    {
      name: "Mobile Development",
      icon: <DeveloperModeIcon />,
    },
    {
      name: "Machine Learning",
      icon: <CodeIcon />,
    },
    {
      name: "Data Science",
      icon: <ScoreIcon />,
    },
    {
      name: "Digital Marketing",
      icon: <AddBusinessIcon />,
    },
    {
      name: "Business Management",
      icon: <WorkHistoryIcon />,
    },
    {
      name: "DevOps",
      icon: <IntegrationInstructionsIcon />,
    },
    {
      name: "Computer Vision",
      icon: <WebhookIcon />,
    },
    {
      name: "Artificial Intelligence",
      icon: <ApiIcon />,
    },
  ];

  return (
    <section className={styles.container}>
      <h3>COURSE CATEGORIES</h3>
      <h5>Popular topics to learn</h5>
      <div className={styles["course-container"]}>
        {courses.map((course, index) => (
          <p key={index} className={styles.items}>
            {course.icon}
            {course.name}
          </p>
        ))}
      </div>
    </section>
  );
};
export default CourseCategories;
