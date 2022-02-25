import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MazdaCX9OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine9 from "./EquipmentCX9/CardsEngine/CardsEngine9";
import CardsSet9 from "./EquipmentCX9/CardsSet/CardsSet9";

const MazdaCX9OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [chosen, setChosen] = useState(0);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="mazdacx9-options-main-container">
        <div className="mazdacx9-options-link-h2-container">
          <Link to="/configurator" className="mazdacx9-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДВИГАТЕЛЬ, КОМПЛЕКТАЦИЮ И ПАКЕТ</h2>
        </div>
        <div className="main-container-engine-cards-cx9">
          <CardsEngine9 type="2.5 Skyactiv-G (231 л.с.)" />
        </div>
        <div className="main-container-set-cards-cx9">
          <div
            onMouseEnter={(() => setIsShown(true), () => setChosen(1))}
            onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
            className="main-container-set-cards-first-card"
          >
            {(isShown === true && chosen === 2) ||
            (isShown === true && chosen === 3) ? (
              <div
                style={{
                  pointerEvents: "none",
                  opacity: "0.4",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <CardsSet9
                  type="AT 6 / 4WD"
                  src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                  text="ACTIVE"
                  price="3 335 000 ₽"
                  path="/mazdacx9equipdetails"
                  number={0}
                />
              </div>
            ) : (
              <div>
                <CardsSet9
                  type="AT 6 / 4WD"
                  src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                  text="ACTIVE"
                  price="3 335 000 ₽"
                  path="/mazdacx9equipdetails"
                  number={0}
                  isShown={isShown}
                  chosen={chosen}
                />
              </div>
            )}
          </div>

          <div
            className="main-container-set-cards-second-card"
            onMouseEnter={(() => setIsShown(true), () => setChosen(2))}
            onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
          >
            {(isShown === true && chosen === 1) ||
            (isShown === true && chosen === 3) ? (
              <div
                style={{
                  pointerEvents: "none",
                  opacity: "0.4",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <CardsSet9
                  type="AT 6 / 4WD"
                  text="SUPREME"
                  price="3 816 000 ₽"
                  src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                  path="/mazdacx9equipdetails"
                  number={1}
                />
              </div>
            ) : (
              <div>
                <CardsSet9
                  type="AT 6 / 4WD"
                  text="SUPREME"
                  price="3 816 000 ₽"
                  src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                  path="/mazdacx9equipdetails"
                  number={1}
                  isShown={isShown}
                  chosen={chosen}
                />
              </div>
            )}
          </div>

          <div
            onMouseEnter={(() => setIsShown(true), () => setChosen(3))}
            onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
            className="main-container-set-cards-third-card"
          >
            {(isShown === true && chosen === 2) ||
            (isShown === true && chosen === 1) ? (
              <div
                style={{
                  pointerEvents: "none",
                  opacity: "0.4",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <CardsSet9
                  type="AT 6 / 4WD"
                  text="EXCLUSIVE"
                  price="3 955 000 ₽"
                  src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                  path="/mazdacx9equipdetails"
                  number={2}
                />
              </div>
            ) : (
              <div>
                <CardsSet9
                  type="AT 6 / 4WD"
                  text="EXCLUSIVE"
                  price="3 955 000 ₽"
                  src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                  path="/mazdacx9equipdetails"
                  number={2}
                  isShown={isShown}
                  chosen={chosen}
                />
              </div>
            )}
          </div>
        </div>
        <div className="prices-container">
          <p className="prices-text-conf-main">
            Цены действительны с 29 декабря 2021 года на автомобили 2021 года
            производства. Подробную информацию уточняйте у официального дилера
            Mazda. Гарантия производителя – 3 года или 100 000 км пробега.
            Количество автомобилей по указанным ценам ограничено. Цены и
            комплектации, указанные в данном прайс-листе, могут быть изменены
            без предварительного уведомления. Информация о ценах на продукцию,
            модельном ряде и комплектациях, представленная в настоящем
            прайс-листе, носит исключительно информационный характер и не
            является офертой, в т. ч. публичной (п. 2 ст. 437 ГК РФ). Указанные
            цены могут отличаться от действующих цен у Официальных Дилеров.
            Приобретение любой продукции осуществляется в соответствии с
            условиями индивидуального договора купли-продажи. Представленная в
            прайс-листе информация о продукции также не означает, что данная
            продукция имеется в наличии у Официальных Дилеров для продажи. Для
            получения информации о наличии автомобилей, актуальных ценах, а
            также подробных сведений об автомобилях вы можете обратиться к
            Официальному Дилеру по вашему выбору.
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaCX9OptionsMain;
