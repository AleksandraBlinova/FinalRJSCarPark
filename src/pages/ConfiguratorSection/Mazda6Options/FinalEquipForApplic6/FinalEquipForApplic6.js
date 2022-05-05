import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FinalEquipForApplic6.css";
import { MdArrowBack } from "react-icons/md";
import axios from "axios";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiButtonBase-root": { padding: "0px" },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "purple",
    },
  },
});

const BootstrapButton = styled(Button)({
  borderColor: "#807e7e",
  boxShadow: "inset 0 0 0 2.5px #807e7e",
  textTransform: "none",
  fontSize: 20,
  backgroundColor: "#0063cc",
  color: "#450505",
  padding: "15px 22px",
  border: "1px solid",
  lineHeight: 1.5,
  borderRadius: "0px",
  width: "25ch",
  height: "40px",
  float: "right",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    borderColor: "#7e57c2",
    boxShadow: "inset 0 0 0 2.5px #7e57c2",
    transition: "all 0.2s",
    textDecoration: "none",
    color: "#673ab7",
  },
});
const FinalEquipForApplic6 = (props) => {
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
              <h5>Mazda 6 </h5>
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
                {props.location.propsSearch.colorExtraCost}
                &nbsp;₽&nbsp;&nbsp;&nbsp;&nbsp;
              </h5>
              <Fab
                size="small"
                style={{ background: props.location.propsSearch.colorView }}
              />
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
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <Fab
                size="small"
                style={{
                  background: props.location.component.colorInteriorView,
                }}
              />
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
        <div className="application-sender">
          <div>
            <CustomTextField
              id="outlined-basic"
              label="Имя пользователя"
              variant="outlined"
              sx={{ width: "40ch" }}
            />
          </div>
          <div className="user-email-final-applic-6">
            <CustomTextField
              id="outlined-basic"
              label="Email пользователя"
              variant="outlined"
              sx={{ width: "40ch" }}
            />
          </div>
        </div>
        <div className="button-sender-applic-6-container">
          <BootstrapButton className="className=button-sender-applic-6">
            Отправить заявку
          </BootstrapButton>
        </div>
      </div>{" "}
      <NewFooter />
    </div>
  );
};

export default FinalEquipForApplic6;
