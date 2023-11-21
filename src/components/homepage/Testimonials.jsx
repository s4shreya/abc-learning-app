import styles from "./Testimonials.module.css";
import person1 from "../../images/person.png";
import person2 from "../../images/person2.png";

const Testimonials = () => {
  const testimonials = [];
  for (let i = 0; i < 20; i++) {
    testimonials.push(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis pretium mi. Vestibulum vestibulum odio eu diam sagittis sollicitudin. Phasellus convallis, urna sed gravida ultrices."
    );
  }

  return (
    <>
      <h4 className={styles.heading}>Testimonials</h4>
      <div className={styles.container}>
        <section className={styles["moving-testimonials"]}>
          {testimonials.map((testimonial, index) => (
            <>
              <span key={index} className={styles.testimonial}>
                {testimonial}
              </span>
              <img
                src={index % 2 === 0 ? person1 : person2}
                alt="testimonial"
                height={75}
                width={75}
              />
            </>
          ))}
        </section>
      </div>
    </>
  );
};
export default Testimonials;
