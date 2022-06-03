import React, { useState, useEffect, useRef } from "react";
import "./CardsMain.css";
import Card from "./Card";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import FormHelperText from "@material-ui/core/FormHelperText";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2.5),
      minWidth: 220,
      "@media only screen and (max-width: 450px)": {
        minWidth: "80px",
      },
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
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
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const CardsMain = (props) => {
  const [models, setModels] = useState();
  const [modelsFlag, setModelsFlag] = useState(false);
  const [modelsLoading, setModelsLoading] = useState(false);

  const paths = ["/mazda6config", "/mazdacx5config", "/mazdacx9config"];
  useEffect(() => {
    setModelsLoading(true); //устанавливаем true для загрузочной полосы
    axios({
      //оправляем запрос на получение машинок
      method: "GET",
      url: "http://localhost:7831/api/allmodels/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setModels(response.data);
        setModelsLoading(false); //устанавливаем false для загрузочной полосы (она больше не нужна)
        setModelsFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  return (
    <>
      <div className="cards-main-container">
        <div
          style={
            props.disabled && props.status === "crossover"
              ? { pointerEvents: "none", opacity: "0.4" }
              : {}
          }
        >
          {props.currentRole == 2 && (
            <Tooltip
              ref={props.titleRefCarsEditToTable}
              title="Изменить"
              style={{ float: "right" }}
            >
              <IconButton
                onClick={() => {
                  props.handleBackClickCarsEdit();
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
          {modelsFlag === true &&
            models.reduce((res, e) => {
              if (e.id == 1) {
                return (
                  <Card
                    src={e.pictureUrl}
                    text={"MAZDA" + " " + e.model1}
                    path={paths[0]}
                    type={e.type.type1}
                    price={"от " + e.startPrice + " ₽"}
                  />
                );
              } else {
                return res;
              }
            }, "")}
        </div>

        <div
          style={
            props.disabled && props.status === "sedan"
              ? { pointerEvents: "none", opacity: "0.4" }
              : {}
          }
        >
          {props.currentRole == 2 && (
            <Tooltip
              ref={props.titleRefCarsEditToTable}
              title="Изменить"
              style={{ float: "right" }}
            >
              <IconButton
                onClick={() => {
                  props.handleBackClickCarsEdit();
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
          {modelsFlag === true &&
            models.reduce((res, e) => {
              if (e.id == 2) {
                return (
                  <Card
                    src={e.pictureUrl}
                    text={"MAZDA" + " " + e.model1}
                    path={paths[1]}
                    type={e.type.type1}
                    price={"от " + e.startPrice + " ₽"}
                  />
                );
              } else {
                return res;
              }
            }, "")}
        </div>

        <div
          style={
            props.disabled && props.status === "sedan"
              ? { pointerEvents: "none", opacity: "0.4" }
              : {}
          }
        >
          {props.currentRole == 2 && (
            <Tooltip
              ref={props.titleRefCarsEditToTable}
              title="Изменить"
              style={{ float: "right" }}
            >
              <IconButton
                onClick={() => {
                  props.handleBackClickCarsEdit();
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
          {modelsFlag === true &&
            models.reduce((res, e) => {
              if (e.id == 3) {
                return (
                  <Card
                    src={e.pictureUrl}
                    text={"MAZDA" + " " + e.model1}
                    path={paths[2]}
                    type={e.type.type1}
                    price={"от " + e.startPrice + " ₽"}
                  />
                );
              } else {
                return res;
              }
            }, "")}
        </div>
      </div>

      {props.currentRole == 2 && (
        <>
          <div className="add-model">
            <h2 ref={props.titleRefCarsCreate}>Добавление модели</h2>
            <div className="car-change-container-cards-main-add">
              <form className="form-container-cards-main-add">
                <div className="fields">
                  <div>
                    {" "}
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Модель{" "}
                      </InputLabel>
                      <BootstrapInput
                        // onChange={handleChange}
                        // value={price}
                        id="demo-customized-textbox"
                      />
                      <FormHelperText>Модель</FormHelperText>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Тип модели{" "}
                      </InputLabel>
                      <BootstrapInput
                        // onChange={handleChange}
                        // value={price}
                        id="demo-customized-textbox"
                      />
                      <FormHelperText> Тип модели</FormHelperText>
                    </FormControl>{" "}
                  </div>
                  <div>
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Стартовая цена{" "}
                      </InputLabel>
                      <BootstrapInput
                        // onChange={handleChange}
                        // value={price}
                        id="demo-customized-textbox"
                      />
                      <FormHelperText> Стартовая цена</FormHelperText>
                    </FormControl>{" "}
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        props.handleBackClickCarsCreateToTable();
                      }}
                      className="btn-2"
                      // type="submit"
                    >
                      Применить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="edit-model">
            <h2 ref={props.titleRefCarsEdit}>Изменение модели</h2>
            <div className="car-change-container-cards-main-edit">
              <form className="form-container-cards-main-edit">
                <div className="fields">
                  <div>
                    {" "}
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Модель{" "}
                      </InputLabel>
                      <BootstrapInput
                        // onChange={handleChange}
                        // value={price}
                        id="demo-customized-textbox"
                      />
                      <FormHelperText>Модель</FormHelperText>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Тип модели{" "}
                      </InputLabel>
                      <BootstrapInput
                        // onChange={handleChange}
                        // value={price}
                        id="demo-customized-textbox"
                      />
                      <FormHelperText> Тип модели</FormHelperText>
                    </FormControl>{" "}
                  </div>
                  <div>
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Стартовая цена{" "}
                      </InputLabel>
                      <BootstrapInput
                        // onChange={handleChange}
                        // value={price}
                        id="demo-customized-textbox"
                      />
                      <FormHelperText> Стартовая цена</FormHelperText>
                    </FormControl>{" "}
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        props.handleBackClickCarsEditToTable();
                      }}
                      className="btn-2"
                      //type="submit"
                    >
                      Применить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardsMain;
