import { useState, useEffect, useRef } from "react";

import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.webp";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.webp";

import styles from "./ImageGallery.module.css";

const ImageGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = useRef();
  const images = [slide1, slide2, slide3, slide4, slide5];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      2500
    );
    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-slideIndex * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img
            className={styles.slide}
            key={index}
            src={image}
            alt="slider image"
            height={550}
          />
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.slideshowDot} ${
              slideIndex === index ? ` ${styles.active}` : ""
            }`}
            onClick={() => {
              setSlideIndex(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;
