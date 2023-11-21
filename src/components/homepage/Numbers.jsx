import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styles from "./Numbers.module.css";

const Numbers = () => {
  const [startCounter, setStartCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setStartCounter(true)}
      onExit={() => setStartCounter(false)}
    >
      <section className={styles.container}>
        <p>
          {startCounter && <CountUp start={0} end={1500} />}+ <br />
          <span>Students Enrolled</span>
        </p>
        <p>
          {startCounter && <CountUp start={0} end={500} />}+ <br />
          <span>Courses</span>
        </p>
        <p>
          {startCounter && <CountUp start={0} end={730} />}+ <br />
          <span>Quizes</span>
        </p>
        <p>
          {startCounter && <CountUp start={0} end={268} />}+ <br />
          <span>Top Instructors</span>
        </p>
      </section>
    </ScrollTrigger>
  );
};
export default Numbers;
