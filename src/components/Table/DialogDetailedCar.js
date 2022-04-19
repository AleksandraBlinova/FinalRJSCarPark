import React, { useRef, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogDetailedCar = (props) => {
  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <AppBar
        sx={{ position: "relative" }}
        style={{ backgroundColor: "#202020", height: "70px" }}
      >
        <Toolbar>
          <Typography sx={{ margin: "0 auto" }} variant="h6" component="div">
            Полная информация о выбранном автомобиле
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: "100%",
          maxWidth: 760,
          margin: "0 auto",
          paddingTop: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            color: "black",
            fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Информация об автомобиле Mazda {props.carForEdit.model.model1}
        </Typography>
        <List>
          <ListItem>
            <CardMedia
              component="img"
              height="650"
              image={props.carForEdit.imageUrl}
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
              № автомобиля:&nbsp;&nbsp;
            </Typography>
            <h5> {props.carForEdit.id}</h5>
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
              Модель:&nbsp;&nbsp;
            </Typography>
            <h5>{props.carForEdit.model.model1} </h5>
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
            <h5>{props.carForEdit.grade.grade1} </h5>
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
              Цвет:&nbsp;&nbsp;
            </Typography>
            <h5> {props.carForEditColor}</h5>
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
              Цена:&nbsp;&nbsp;
            </Typography>
            <h5> {props.carForEdit.price}</h5>
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
              Год выпуска:&nbsp;&nbsp;
            </Typography>
            <h5>{props.carForEdit.releaseYear} </h5>
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
              Склад нахождения автомобиля:&nbsp;&nbsp;
            </Typography>
            <h5>{props.carForEdit.warehouse.warehouse1} </h5>
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
              Регион нахождения автомобиля:&nbsp;&nbsp;
            </Typography>
            <h5>{props.carForEdit.warehouse.region.regionName} </h5>
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
              <h5>{props.carForEdit.engine.engine1} </h5>
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
              <h5> {props.carForEdit.performance.hp}</h5>
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
              <h5> {props.carForEdit.performance.torque}</h5>
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
              <h5>{props.carForEdit.performance.transm.transmission1} </h5>
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
              <h5> {props.carForEdit.drive.drive1}</h5>
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
              <h5> {props.carForEdit.performance.speed}</h5>
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
              <h5> {props.carForEdit.performance.accelerationTime} </h5>
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
              <h5> {props.carForEdit.performance.mixedCycle}</h5>
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
              <h5> {props.carForEdit.performance.trunkVolume} </h5>
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
              <h5> {props.carForEdit.performance.fuelCapacity} </h5>
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
              <h5> {props.carForEdit.performance.recommendedFuel} </h5>
            </ListItem>
          </List>
        </List>
      </Box>
    </Dialog>
  );
};
export default DialogDetailedCar;
