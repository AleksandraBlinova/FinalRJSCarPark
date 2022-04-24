import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mazda6OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine6 from "./Equipment6/CardsEngine/CardsEngine6";
import CardsSet6 from "./Equipment6/CardsSet/CardsSet6";
import axios from "axios";

const Mazda6OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [chosen, setChosen] = useState(0);
  const [gmed, setGMED] = useState([]);
  const [models, setModels] = useState([]);
  const [engines, setEngines] = useState([]);
  const [grades, setGrades] = useState(); //new
  const [loadFlag, setLoadFlag] = useState(false);
  const [loadDflag, setLoadDFlag] = useState(false);
  const [drives, setDrives] = useState(); //new
  const [originalDrives, setOriginalDrives] = useState(""); //new

  const onHover = () => {
    setHover(!hover);
  };
  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/gmed/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setGMED(response.data);
        setModels(response.data.map((i) => i.model));
        setEngines(response.data.map((i) => i.engine));
        setGrades(response.data.map((i) => i.grade));

        setLoadFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/drives/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setOriginalDrives(response.data);
        setDrives(response.data);
        setLoadDFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="mazda6-options-main-container">
        <div className="mazda6-options-link-h2-container">
          <Link to="/configurator" className="mazda6-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДВИГАТЕЛЬ, КОМПЛЕКТАЦИЮ И ПАКЕТ</h2>
        </div>
        <div className="main-container-engine-cards">
          <CardsEngine6 />
        </div>

        <div className="main-container-set-cards">
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
                <CardsSet6
                  type="AT 6 / 2WD"
                  src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                  text="DRIVE"
                  price="1 876 000 ₽"
                  path="/mazda6equipdetails"
                  number={0}
                />
              </div>
            ) : (
              <div>
                <CardsSet6
                  type="AT 6 / 2WD"
                  src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                  text="DRIVE"
                  price="1 876 000 ₽"
                  path="/mazda6equipdetails"
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
                <CardsSet6
                  type="AT 6 / 2WD"
                  text="ACTIVE"
                  price="1 990 000 ₽"
                  src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                  path="/mazda6equipdetails"
                  number={1}
                />
              </div>
            ) : (
              <div>
                <CardsSet6
                  type="AT 6 / 2WD"
                  text="ACTIVE"
                  price="1 990 000 ₽"
                  src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                  path="/mazda6equipdetails"
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
                <CardsSet6
                  type="AT 6 / 2WD"
                  text="SUPREME PLUS"
                  price="2 268 000 ₽"
                  src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                  path="/mazda6equipdetails"
                  number={2}
                />
              </div>
            ) : (
              <div>
                <CardsSet6
                  type="AT 6 / 2WD"
                  text="SUPREME PLUS"
                  price="2 268 000 ₽"
                  src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                  path="/mazda6equipdetails"
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

export default Mazda6OptionsMain;
