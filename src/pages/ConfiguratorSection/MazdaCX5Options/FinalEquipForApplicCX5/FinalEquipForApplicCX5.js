import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FinalEquipForApplicCX5.css";
import { MdArrowBack } from "react-icons/md";
import axios from "axios";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const FinalEquipForApplicCX5 = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [transms, setTransms] = useState();
  const [loadTFlag, setLoadTFlag] = useState(false);
  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/transm/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setTransms(response.data);
        setLoadTFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="mazda6-options-main-container">
        <div className="mazda6-options-link-h2-container">
          <Link to="/extraserv6" className="mazda6-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ПРОВЕРЬТЕ ПРАВИЛЬНОСТЬ ВЫБРАННЫХ ДАННЫХ</h2>
        </div>
        <div className="final-data-mazda6">
          <List>
            <ListItem>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#4E4E50",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  fontWeight: "400",
                }}
              >
                Модель:&nbsp;&nbsp;
              </Typography>
              <h5>Mazda CX-5 </h5>
            </ListItem>

            <Divider />
            <ListItem>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#4E4E50",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  fontWeight: "400",
                }}
              >
                Класс:&nbsp;&nbsp;
              </Typography>
              <h5>{props.location.params.grade.grade1}</h5>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#4E4E50",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  fontWeight: "400",
                }}
              >
                Цвет экстерьера:&nbsp;&nbsp;
              </Typography>
              <h5>
                {" "}
                {props.location.propsSearch.color1}&nbsp;&nbsp;
                {props.location.propsSearch.colorExtraCost}&nbsp;₽
              </h5>
            </ListItem>

            <Divider />
            <ListItem>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#4E4E50",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  fontWeight: "400",
                }}
              >
                Цвет интерьера:&nbsp;&nbsp;
              </Typography>
              <h5> {props.location.component.colorInterior1}</h5>
            </ListItem>

            <Divider />

            <List>
              <Typography
                sx={{
                  fontSize: "28px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Технические характеристики
              </Typography>
              <Divider />
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  textAlign: "center",
                  backgroundColor: "#999999",
                }}
              >
                Двигатель
              </Typography>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Объем двигателя, л:&nbsp;&nbsp;
                </Typography>
                <h5>{props.location.params.engine.engine1}</h5>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Мощность (л.с):&nbsp;&nbsp;
                </Typography>
                <h5>{props.location.params.performance.map((h) => h.hp)} </h5>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Крутящийся момент, Hм:&nbsp;&nbsp;
                </Typography>
                <h5>
                  {props.location.params.performance.map((h) => h.torque)}
                </h5>
              </ListItem>

              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Трансмиссия: &nbsp;&nbsp;
                </Typography>
                <h5>
                  {loadTFlag !== false &&
                    transms.find(
                      (item) =>
                        item.id ==
                        props.location.params.performance.map((h) => h.transmId)
                    ).transmission1}
                </h5>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Привод: &nbsp;&nbsp;
                </Typography>
                <h5>{props.location.params.drive.drive1}</h5>
              </ListItem>

              <Divider />
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  textAlign: "center",
                  backgroundColor: "#999999",
                }}
              >
                Динамические показатели
              </Typography>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Максимальная скорость:&nbsp;&nbsp;
                </Typography>
                <h5>
                  {props.location.params.performance.map((h) => h.speed)}{" "}
                </h5>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Время разгона (от 0 до 100 км/ч):&nbsp;&nbsp;
                </Typography>
                <h5>
                  {props.location.params.performance.map(
                    (h) => h.accelerationTime
                  )}{" "}
                </h5>
              </ListItem>
              <Divider />
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  textAlign: "center",
                  backgroundColor: "#999999",
                }}
              >
                Расход топлива, л/ 100 км
              </Typography>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Смешанный цикл:&nbsp;&nbsp;
                </Typography>
                <h5>
                  {props.location.params.performance.map((h) => h.mixedCycle)}{" "}
                </h5>
              </ListItem>
              <Divider />
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  textAlign: "center",
                  backgroundColor: "#999999",
                }}
              >
                Габаритные размеры, мм
              </Typography>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Объем багажника:&nbsp;&nbsp;
                </Typography>
                <h5>
                  {props.location.params.performance.map((h) => h.trunkVolume)}{" "}
                </h5>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Объем топливного бака, л:&nbsp;&nbsp;
                </Typography>
                <h5>
                  {" "}
                  {props.location.params.performance.map(
                    (h) => h.fuelCapacity
                  )}{" "}
                </h5>
              </ListItem>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Рекомендуемое топливо:&nbsp;&nbsp;
                </Typography>
                <h5>
                  {props.location.params.performance.map(
                    (h) => h.recommendedFuel
                  )}{" "}
                </h5>
              </ListItem>

              <Divider />
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  textAlign: "center",
                  backgroundColor: "#999999",
                }}
              >
                Дополнительная услуга
              </Typography>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#4E4E50",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "400",
                  }}
                >
                  Выбранная дополнительная услуга:&nbsp;&nbsp;
                </Typography>
                {props.location.query !== undefined && (
                  <h5>
                    {props.location.query.extraServName} &nbsp;&nbsp;{" "}
                    {props.location.query.extraServCost}&nbsp;₽
                  </h5>
                )}
                {props.location.query == undefined && (
                  <h5>без выбора дополнительной услуги</h5>
                )}
              </ListItem>
              <Divider />
              <Typography
                sx={{
                  fontSize: "28px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Общая стоимость
              </Typography>
              <Divider />
              <ListItem>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#000",
                    fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                    paddingBottom: "5px",
                    fontWeight: "600",
                  }}
                >
                  Стоимость всех выбранных услуг:&nbsp;&nbsp;
                </Typography>

                <h3>{props.location.params.cost} &nbsp;₽</h3>
              </ListItem>
            </List>
          </List>
        </div>
      </div>{" "}
      <NewFooter />
    </div>
  );
};

export default FinalEquipForApplicCX5;
