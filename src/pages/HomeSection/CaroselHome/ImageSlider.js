import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import {
  IndicatorWrapper,
  Dot,
  Wrapper,
  Slide,
  ChildrenWrapper,
  Gradient,
  Text,
} from "./ImageSliderElements";

const mainTexts = [
  "MAZDA 6",
  "MAZDA CX-5",
  "СПЕЦИАЛЬНАЯ СЕРИЯ NOIR",
  "ПО ЦЕНАМ 2022 ГОДА",
  "НОВЫЙ MAZDA CX-9",
  "MAZDA КРЕДИТ ЛАЙТ",
];

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 3000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></Slide>
      ))}

      <Gradient />
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default ImageSlider;
