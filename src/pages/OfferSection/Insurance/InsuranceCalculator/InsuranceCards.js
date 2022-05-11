import React, { useState } from "react";
import { Link } from "react-router-dom";

const InsuranceCards = (props) => {
  const [vladimirMiniDriveM6, setVladimirMiniDriveM6] = useState(0.0122);
  const [vladimirMiniDriveMCX5, setVladimirMiniDriveMCX5] = useState(0.0072);
  const [vladimirMiniDriveMCX9, setVladimirMiniDriveMCX9] = useState(0.0063);

  const [moscowMiniDriveMCX5, setMoscowMiniDriveMCX5] = useState(0.0132);
  const [moscowMiniDriveMCX9, setMoscowMiniDriveMCX9] = useState(0.0073);

  const [peterMiniDriveM6, setPeterMiniDriveM6] = useState(0.0162);
  const [peterMiniDriveMCX5, setPeterMiniDriveMCX5] = useState(0.0082);
  const [peterMiniDriveMCX9, setPeterMiniDriveMCX9] = useState(0.0093);

  const [driveM6, setDriveM6] = useState(0.0386);
  const [driveMCX5, setDriveMCX5] = useState(0.025);

  return (
    <>
      <div className="insurance-cards-start-container">
        {" "}
        <h3>Доступные программы страхования</h3>
      </div>

      <div className="insurance-cards-main-container">
        {" "}
        <div className="cards-item-ins">
          <div className="cards-item-link-ins">
            <div className="cards-item-info">
              <h5 className="cards-item-text"> МИНИ ДРАЙВ!</h5>
              <p className="cards-item-type-ins">
                Полное покрытие риска «Угон» и «Тотальная гибель»
              </p>
            </div>

            <div className="cards-item-price-container">
              <p className="cards-item-price">Сумма страховки :</p>
              {props.currentCostFlag &&
                props.currentIdM == 1 &&
                props.valueLabel == "Владимир" && (
                  <h5>
                    {(props.currentCost * vladimirMiniDriveM6).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
              {props.currentCostFlag &&
                props.currentIdM == 2 &&
                props.valueLabel == "Владимир" && (
                  <h5>
                    {(props.currentCost * vladimirMiniDriveMCX5).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
              {props.currentCostFlag &&
                props.currentIdM == 3 &&
                props.valueLabel == "Владимир" && (
                  <h5>
                    {(props.currentCost * vladimirMiniDriveMCX9).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}

              {props.currentCostFlag &&
                props.currentIdM == 1 &&
                props.valueLabel == "Москва" && (
                  <h5>
                    {(props.currentCost * vladimirMiniDriveM6).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
              {props.currentCostFlag &&
                props.currentIdM == 2 &&
                props.valueLabel == "Москва" && (
                  <h5>
                    {(props.currentCost * moscowMiniDriveMCX5).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
              {props.currentCostFlag &&
                props.currentIdM == 3 &&
                props.valueLabel == "Москва" && (
                  <h5>
                    {(props.currentCost * moscowMiniDriveMCX9).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}

              {props.currentCostFlag &&
                props.currentIdM == 1 &&
                props.valueLabel == "Санкт-Петербург" && (
                  <h5>
                    {(props.currentCost * peterMiniDriveM6).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
              {props.currentCostFlag &&
                props.currentIdM == 2 &&
                props.valueLabel == "Санкт-Петербург" && (
                  <h5>
                    {(props.currentCost * peterMiniDriveMCX5).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
              {props.currentCostFlag &&
                props.currentIdM == 3 &&
                props.valueLabel == "Санкт-Петербург" && (
                  <h5>
                    {(props.currentCost * peterMiniDriveMCX9).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
            </div>
          </div>
        </div>
        {(props.currentIdM == 1 || props.currentIdM == 2) && (
          <div className="cards-item-ins">
            <div className="cards-item-link-ins">
              <div className="cards-item-info">
                <h5 className="cards-item-text"> ДРАЙВ!</h5>
                <p className="cards-item-type-ins">
                  Полное покрытие риска «Угон» и «Тотальная гибель». <br></br>
                  Частичное покрытие риска «Ущерб»
                </p>
              </div>

              <div className="cards-item-price-container">
                <p className="cards-item-price">Сумма страховки :</p>
                {props.currentCostFlag && props.currentIdM == 1 && (
                  <h5>
                    {(props.currentCost * driveM6).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
                {props.currentCostFlag && props.currentIdM == 2 && (
                  <h5>
                    {(props.currentCost * driveMCX5).toFixed(0)}
                    &nbsp;&nbsp;₽
                  </h5>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InsuranceCards;
