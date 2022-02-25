import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mazda6OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine6 from "./Equipment6/CardsEngine/CardsEngine6";
import CardsSet6 from "./Equipment6/CardsSet/CardsSet6";

const Mazda6OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [chosen, setChosen] = useState(0);
  const onHover = () => {
    setHover(!hover);
  };
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
          <CardsEngine6 type="2.0 Skyactiv-G (150 л.с.)" />
          <CardsEngine6 type="2.5 Skyactiv-G (194 л.с.)" />
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
      </div>
      <NewFooter />
    </>
  );
};

export default Mazda6OptionsMain;
