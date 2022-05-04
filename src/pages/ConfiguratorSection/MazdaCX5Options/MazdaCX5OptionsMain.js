import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MazdaCX5OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine from "./EquipmentCX5/CardsEngine/CardsEngine";
import CardsSet from "./EquipmentCX5/CardsSet/CardsSet";
import axios from "axios";
import ChosenEquipmentCX5 from "./EquipmentCX5/ChosenEquipmentCX5/ChosenEquipmentCX5";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ChosenColorInteriorCX5 from "./ChosenColorInteriorCX5/ChosenColorInteriorCX5";
import ChosenColorExteriorCX5 from "./ChosenColorExteriorCX5/ChosenColorExteriorCX5";

const MazdaCX5OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [chosen, setChosen] = useState(0);
  const onHover = () => {
    setHover(!hover);
  };

  const [ged, setGED] = useState([]);

  const [engines, setEngines] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/ged/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setGED(response.data);

        setEngines(
          response.data
            .filter((item) => item.modelId == 2)
            .map((i) => i.engine)
            .reduce((o, c) => {
              const exist = o.find(
                (item) => item.id === c.id && item.engine1 === c.engine1
              );
              if (!exist) {
                const options = response.data
                  .filter(
                    (item) => item.id === c.id && item.engine1 === c.engine1
                  )
                  .map((item) => item.option);

                o.push({
                  id: c.id,
                  engine1: c.engine1,
                  options: Array.from(new Set(options)),
                });
              }

              return o;
            }, [])
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const types = engines.map((i) => i.engine1);

  const [active, setActive] = useState("");
  const [activeEngineId, setActiveEngineId] = useState();
  const [loadAEflag, setLoadAEFlag] = useState(false);

  const handleChangeActive = (newActive) => {
    setActive(newActive);
    if (newActive === "2.0") {
      setActiveEngineId(1);
      setEquipments(ged.filter((i) => i.modelId === 2 && i.engineId === 1));
      setLoadAEFlag(true);
    } else {
      setActiveEngineId(2);
      setEquipments(ged.filter((i) => i.modelId === 2 && i.engineId === 2));
      setLoadAEFlag(true);
    }
  };
  let [chosenColorExterior, setChosenColorExterior] = useState(
    props.location.propsSearch
  );
  let [chosenColorInterior, setChosenColorInterior] = useState(
    props.location.component
  );

  let [chosenCarForConfig, setChosenCarForConfig] = useState(
    props.location.params
  );
  const [equipments, setEquipments] = useState();
  const [chosenEquipmentCar, setChosenEquipmentCar] = useState();
  const handleChangeEquipment = (newValue) => {
    setChosenEquipmentCar(newValue);
    setChosenColorInterior(undefined);
    setChosenColorExterior(undefined);
  };
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  function handleClickAway() {
    setOpen(false);
  }

  const [pathnameForExtraServ, setPathnameForExtraServ] =
    useState("/extraservcx5");

  return (
    <>
      <div className="mazdacx5-options-main-container">
        <div className="mazdacx5-options-link-h2-container">
          <Link to="/configurator" className="mazdacx5-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДВИГАТЕЛЬ, КОМПЛЕКТАЦИЮ И ПАКЕТ</h2>
        </div>
        <div className="main-container-engine-cards-cx5">
          <CardsEngine
            engines={engines}
            types={types}
            active={active}
            setActive={handleChangeActive}
          />
        </div>
        {active !== undefined && active === "2.0" && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="main-container-set-cards-cx5">
              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(1))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-first-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 3) ||
                (isShown === true && chosen === 4) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 7) {
                          return (
                            <CardsSet
                              type={"MT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 1}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 7) {
                          return (
                            <CardsSet
                              type={"MT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 1}
                              isShown={isShown}
                              chosen={chosen}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>

              <div
                className="main-container-set-cards-second-card"
                onMouseEnter={(() => setIsShown(true), () => setChosen(2))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
              >
                {(isShown === true && chosen === 1) ||
                (isShown === true && chosen === 3) ||
                (isShown === true && chosen === 4) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 8) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 1}
                              extratext="light"
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 8) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 1}
                              isShown={isShown}
                              chosen={chosen}
                              extratext="light"
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>

              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(3))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-third-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 4) ||
                (isShown === true && chosen === 1) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 9) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId}
                              extratext="hard"
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 9) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId}
                              isShown={isShown}
                              chosen={chosen}
                              extratext="hard"
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>

              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(4))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-third-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 3) ||
                (isShown === true && chosen === 1) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 10) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 3}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 10) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 3}
                              isShown={isShown}
                              chosen={chosen}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>
            </div>
          </ClickAwayListener>
        )}

        {active !== undefined && active === "2.5" && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="main-container-set-cards-cx5-25">
              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(3))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-third-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 4) ||
                (isShown === true && chosen === 1) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 11) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId}
                              extratext="hard"
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 11) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId}
                              isShown={isShown}
                              chosen={chosen}
                              extratext="hard"
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>

              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(4))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-third-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 3) ||
                (isShown === true && chosen === 1) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 12) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 3}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 12) {
                          return (
                            <CardsSet
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/4,05b3f90622f0a5.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx5equipdetails"
                              number={e.gradeId - 3}
                              isShown={isShown}
                              chosen={chosen}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenEquipmentCar={e}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>
            </div>
          </ClickAwayListener>
        )}

        {chosenColorExterior !== undefined && (
          <ChosenColorExteriorCX5 chosenColorExterior={chosenColorExterior} />
        )}

        {chosenColorInterior !== undefined && (
          <ChosenColorInteriorCX5 chosenColorInterior={chosenColorInterior} />
        )}
        {chosenEquipmentCar !== undefined && open ? (
          <ChosenEquipmentCX5
            chosenEquipmentCar={chosenEquipmentCar}
            handleClick={handleClick}
            chosenColorExterior={chosenColorExterior}
            chosenColorInterior={chosenColorInterior}
            pathnameForExtraServ={pathnameForExtraServ}
          />
        ) : (
          <ChosenEquipmentCX5
            chosenEquipmentCar={chosenCarForConfig}
            chosenColorExterior={chosenColorExterior}
            chosenColorInterior={chosenColorInterior}
            pathnameForExtraServ={pathnameForExtraServ}
          />
        )}

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

export default MazdaCX5OptionsMain;
