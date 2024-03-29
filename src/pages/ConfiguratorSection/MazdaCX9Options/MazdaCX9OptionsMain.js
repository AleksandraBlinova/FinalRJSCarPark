import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MazdaCX9OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine9 from "./EquipmentCX9/CardsEngine/CardsEngine9";
import CardsSet9 from "./EquipmentCX9/CardsSet/CardsSet9";
import axios from "axios";
import ChosenEquipCX9 from "./EquipmentCX9/ChosenEquipCX9/ChosenEquipCX9";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ChosenColorExteriorCX9 from "./ChosenColorExteriorCX9/ChosenColorExteriorCX9";
import ChosenColorInteriorCX9 from "./ChosenColorInteriorCX9/ChosenColorInteriorCX9";

const MazdaCX9OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [chosen, setChosen] = useState(0);

  const [ged, setGED] = useState([]);

  const [engines, setEngines] = useState([]);

  const onHover = () => {
    setHover(!hover);
  };
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
            .filter((item) => item.modelId == 3)
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
    if (newActive === "2.5T") {
      setActiveEngineId(1);
      setEquipments(ged.filter((i) => i.modelId === 3 && i.engineId === 3));
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
    useState("/extraservcx9");

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
          <CardsEngine9
            engines={engines}
            types={types}
            active={active}
            setActive={handleChangeActive}
          />
        </div>
        {active !== undefined && active === "2.5T" && (
          <ClickAwayListener onClickAway={handleClickAway}>
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
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 13) {
                          return (
                            <CardsSet9
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx9equipdetails"
                              number={e.gradeId - 2}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
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
                        if (e.id == 13) {
                          return (
                            <CardsSet9
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx9equipdetails"
                              number={e.gradeId - 2}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
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
                (isShown === true && chosen === 3) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 14) {
                          return (
                            <CardsSet9
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx9equipdetails"
                              number={e.gradeId - 5}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
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
                        if (e.id == 14) {
                          return (
                            <CardsSet9
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx9equipdetails"
                              number={e.gradeId - 5}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
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
                        if (e.id == 15) {
                          return (
                            <CardsSet9
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx9equipdetails"
                              number={e.gradeId - 5}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
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
                        if (e.id == 15) {
                          return (
                            <CardsSet9
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazdacx9equipdetails"
                              number={e.gradeId - 5}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
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
          <ChosenColorExteriorCX9 chosenColorExterior={chosenColorExterior} />
        )}

        {chosenColorInterior !== undefined && (
          <ChosenColorInteriorCX9 chosenColorInterior={chosenColorInterior} />
        )}
        {chosenEquipmentCar !== undefined && open ? (
          <ChosenEquipCX9
            chosenEquipmentCar={chosenEquipmentCar}
            handleClick={handleClick}
            chosenColorExterior={chosenColorExterior}
            chosenColorInterior={chosenColorInterior}
            pathnameForExtraServ={pathnameForExtraServ}
          />
        ) : (
          <ChosenEquipCX9
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

export default MazdaCX9OptionsMain;
