import React, { useState, useEffect } from "react";
import "./Projects.css"; 
import pro2 from '../assets/pro2.jpg';
import pro3 from '../assets/pro3.jpeg';
import pro4 from '../assets/pro4.jpg';
import pro5 from '../assets/pro5.jpg';
import pro6 from '../assets/pro6.jpg';
import pro7 from '../assets/pro7.jpg';
import pro9 from '../assets/pro9.png';

function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  const images = [pro2, pro3, pro4, pro5, pro6, pro7, pro9];

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  // Adding keyboard event listener
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowRight") {
        slideNext();
      } else if (event.key === "ArrowLeft") {
        slidePrev();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const slideNext = () => {
    setActiveIndex((val) => (val >= images.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? images.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div id="projects">
    <div className="carousel-section">
      <h3 className="carousel-heading">Our Projects</h3>
      <p className="carousel-description">
      Discover our latest and greatest construction projects...
      </p>
      <div
        className="container__slider"
        onMouseEnter={AutoPlayStop}
        onMouseLeave={AutoPlayStart}
      >
        {images.map((image, index) => (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            <img src={image} alt={`Project ${index + 1}`} />
          </div>
        ))}

        <div className="container__slider__links">
          {images.map((_, index) => (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          ))}
        </div>

        <button
          className="slider__btn-next"
          onClick={(e) => {
            e.preventDefault();
            slideNext();
          }}
        >
          {">"}
        </button>
        <button
          className="slider__btn-prev"
          onClick={(e) => {
            e.preventDefault();
            slidePrev();
          }}
        >
          {"<"}
        </button>
      </div>
    </div>
    </div>
  );
}

export default CustomCarousel;
