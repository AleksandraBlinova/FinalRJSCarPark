import React from "react";
import "./Technologies.css";
import MZDCONNECT from "./03_technologies_mzdconnect900x900.jpg";
import carplay from "./03_technologies_carplay900x900-min-min.jpg";
import TSR from "./03_technologies_tsr900x900.jpg";
import carbrake from "./03_technologies_scbs900x900.jpg";
import deadzones from "./03_technologies_bsm900x900.jpg";
import light from "./03_technologies_alh900x900.jpg";
import { NewFooter } from "../../../../components/New Footer/NewFooter";

const Technologies = () => {
  return (
    <>
      <div className="technologies-container-start">
        <h2>ТЕХНОЛОГИИ SKYACTIV</h2>
        <div className="technologies-container-start-p">
          <p>
            Вся мощь и уникальные достижения научного и технологического
            потенциала Mazda реализованы в технологиях SKYACTIV, которые
            применяются как в конструкции автомобиля, так и в электронных
            системах, призванных помочь водителю.
          </p>
          <p>
            Узнайте о том, как технологии Mazda делают вашу поездку более
            безопасной, позволяют меньше утомляться в дороге и в конечном счете
            — получать больше удовольствия от управления вашим автомобилем.
          </p>
        </div>
      </div>
      <div className="technologies-main-container-mzd-left">
        <img src={MZDCONNECT} />
        <div className="technologies-main-container-mzd-left-text">
          <h5>СИСТЕМА MZD CONNECT</h5>
          <p>
            Система MZD Connect - это универсальная коммуникационная и
            мультимедийная система, дающая водителю доступ ко всем функциям его
            автомобиля Mazda с помощью одного интуитивно понятного интерфейса.
          </p>
        </div>
      </div>

      <div className="technologies-main-container-mzd-right">
        <div className="technologies-main-container-mzd-right-text">
          <h5>APPLE CAR PLAY И ANDROID AUTO</h5>
          <p>
            Что удобнее: уже привычный Вам смартфон или обновленная
            мультимедийная система MZD Connect? Удобнее, когда они работают
            вместе, как в автомобилях Mazda с поддержкой Apple CarPlay и Android
            Auto. Пользуйтесь знакомыми функциями вашего смартфона и всем
            функционалом системы MZD Connect одновременно.
          </p>
        </div>
        <img src={carplay} />
      </div>

      <div className="technologies-main-container-mzd-left">
        <img src={TSR} />
        <div className="technologies-main-container-mzd-left-text">
          <h5>СИСТЕМА РАСПОЗНАВАНИЯ ДОРОЖНЫХ ЗНАКОВ</h5>
          <p>
            Cистема распознавания дорожных знаков (TSR) видит даже те дорожные
            знаки, что скрыты от глаз водителя, причем распознает не только
            постоянные знаки, но и временные, и даже знаки, нанесенные на
            асфальт. TSR выводит информацию на проекционный дисплей, а в случае
            несоблюдения требований знаков подает звуковое и визуальное
            оповещение.
          </p>
        </div>
      </div>

      <div className="technologies-main-container-mzd-right">
        <div className="technologies-main-container-mzd-right-text">
          <h5>СИСТЕМА БЕЗОПАСНОГО ТОРМОЖЕНИЯ</h5>
          <p>
            Система безопасного торможения в городе SCBS (Smart City Brake
            Support) специально разработана для городских условий.
          </p>
        </div>
        <img src={carbrake} />
      </div>

      <div className="technologies-main-container-mzd-left">
        <img src={deadzones} />
        <div className="technologies-main-container-mzd-left-text">
          <h5>СИСТЕМА МОНИТОРИНГА МЕРТВЫХ ЗОН</h5>
          <p>
            Cистема мониторинга мертвых зон BSM (Blind Spot Мonitoring) помогает
            водителю контролировать транспортную ситуацию при попытке
            перестроения, освещая дорожную обстановку в «мертвых зонах» зеркал
            заднего вида.
          </p>
        </div>
      </div>

      <div className="technologies-main-container-mzd-right">
        <div className="technologies-main-container-mzd-right-text">
          <h5>АДАПТИВНАЯ СИСТЕМА ОСВЕЩЕНИЯ</h5>
          <p>
            Отныне вам не надо отвлекаться на ручное переключение режимов света,
            чтобы не слепить других водителей - система ALH сделает это
            автоматически.
          </p>
        </div>
        <img src={light} />
      </div>
      <NewFooter />
    </>
  );
};

export default Technologies;
