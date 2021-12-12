import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <section>
      <h1 className="mazda-info">О КОМПАНИИ</h1>
      <p className="text1">
        Mazda Москва и Mazda Санкт-Петербург-официальные дилеры Mazda в России
        входят в состав автомобильного холдинга АО «MazdaHome».
      </p>
      <p className="text2">
        Создавая новую Mazda, мы никогда не делаем кардинальных перемен, но
        всегда вносим заметные и важные изменения.{" "}
      </p>
      <p className="text3">
        Каждое обновление модели – это развитие лучших ее качеств. Поэтому
        обновление любой модели Mazda – это не революция. Это эволюция. Прогресс
        от лучшего к превосходному.
      </p>
      <img src="cx30_gallery_exterior4.jpg" alt="pic1" className="pic1" />
    </section>
  );
};

export default Info;
