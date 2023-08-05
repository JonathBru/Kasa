import { useState } from "react";
import classes from "./Slideshow.module.scss";
import chevronL from "../assets/chevron_left.svg";
import chevronR from "../assets/chevron_right.svg";

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  let carouselControl = "";
  const isMultiImage = images.length > 1;
  
  const prevSlide = () => {
    current === 0
    ? setCurrent(images.length - 1)
    : setCurrent((prev) => prev - 1);
  };
  
  const nextSlide = () => {
    current === images.length - 1
    ? setCurrent(0)
    : setCurrent((prev) => prev + 1);
  };

  if (isMultiImage) {
    carouselControl = (
      <>
        <button onClick={prevSlide} className="left-button">
          <img src={chevronL} alt="" />
        </button>
        <button onClick={nextSlide} className="right-button">
          <img src={chevronR} alt="" />
        </button>
        <span>{`${current+1}/${images.length}`}</span>
      </>
    );
  }

  return (
    <>
      <div className={classes.Container}>
        
        {images.map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            className={`carousel-image ${current === index ? "active" : ""}`}
          ></img>
        ))}
       {carouselControl !== "" && carouselControl}
      </div>
    </>
  );
};

export default Slideshow;