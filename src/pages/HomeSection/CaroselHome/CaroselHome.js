import React from "react";
import { Carousel } from "react-bootstrap";

const CaroselHome = () => {
  return (
    <Carousel
      fade={true}
      pause={false}
      style={{
        width: "100%",
        height: 600,
      }}
    >
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="../imageCarosel/img1.jpg" />
        <Carousel.Caption className="caption">
          <h1 className="h3-text">Страсть и достоинство</h1>
          <p>MAZDA 6</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="../imageCarosel/img2.jpg" />
        <Carousel.Caption className="caption">
          <h1 className="h3-text">Премиальное качество</h1>
          <p>MAZDA CX-5</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="../imageCarosel/img3.jpg" />
        <Carousel.Caption className="caption">
          <h1>Mazda 6, Mazda CX-5 и Mazda CX-9</h1>
          <p>СПЕЦИАЛЬНАЯ СЕРИЯ NOIR</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="../imageCarosel/img4.jpg" />
        <Carousel.Caption className="caption">
          <h1>Ограниченная партия</h1>
          <p>ПО ЦЕНАМ 2021 ГОДА</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="../imageCarosel/img5.jpg" />
        <Carousel.Caption className="caption">
          <h1>Благородное происхождение</h1>
          <p>НОВЫЙ MAZDA CX-9</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="../imageCarosel/img6.jpg" />
        <Carousel.Caption className="caption">
          <h1>Необыкновенно легкий кредит</h1>
          <p>MAZDA КРЕДИТ ЛАЙТ</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CaroselHome;
