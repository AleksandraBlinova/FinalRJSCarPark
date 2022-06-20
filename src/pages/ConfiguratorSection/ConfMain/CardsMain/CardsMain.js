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

  const paths = [
    "/mazda6config",
    "/mazdacx5config",
    "/mazdacx9config",
    "/mazdacx30config",
  ];

  const [currentModel, setCurrentModel] = useState("");

  const handleChangeCurrentModel = (event) => {
    setCurrentModel(event.target.value);
  };

  const [currentStartPrice, setCurrentStartPrice] = useState();

  const handleChangeCurrentStartPrice = (event) => {
    setCurrentStartPrice(event.target.value);
  };

  const [currentType, setCurrentType] = useState();

  const handleChangeCurrentType = (event) => {
    setCurrentType(event.target.value);
  };
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

  console.log(currentModel);
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      model1: currentModel,
      startPrice: currentStartPrice,
      typeId: currentType,
    };

    axios
      .post(`http://localhost:7831/api/allmodels/`, values, {
        withCredentials: true,
      })
      .then((response) => {})
      .catch(console.error);
  };

  const initialFormState = {
    model1: "",
    startPrice: "",
    typeId: "",
  };

  const [currentmodelModel, setCurrentmodelModel] = useState(initialFormState);

  const editModel = (model) => {
    //для загрузки в форму редактирования

    setCurrentmodelModel({
      model1: model.map((m) => m.model1).toString(),
      startPrice: parseInt(model.map((m) => m.startPrice)),
      typeId: parseInt(model.map((m) => m.typeId)),
      id: parseInt(model.map((i) => i.id)),
    });
  };

  useEffect(() => {
    setCurrentmodelModel(currentmodelModel);
    setCurrentModel(currentmodelModel.model1);
    setCurrentStartPrice(currentmodelModel.startPrice);
    setCurrentType(currentmodelModel.typeId);
  }, [currentmodelModel]);

  const handleSubmitEdit = (e) => {
    const values = {
      model1: currentModel,
      startPrice: currentStartPrice,
      typeId: currentType,
    };

    axios
      .put(
        `http://localhost:7831/api/allmodels/${currentmodelModel.id}`,
        values,
        {
          mode: "cors",
          credentials: "include",
          withCredentials: true,
          "content-type": "application/json",
        }
      )
      .then((response) => {
        console.log("OK");
      })
      .catch(console.error);
  };
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
                  editModel(models.filter((e) => e.id == 1));
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
                  editModel(models.filter((e) => e.id == 2));
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
                  editModel(models.filter((e) => e.id == 3));
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
                  editModel(models.filter((e) => e.id == 4));
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
          {modelsFlag === true &&
            models.reduce((res, e) => {
              if (e.id == 4) {
                return (
                  <Card
                    src={e.pictureUrl}
                    text={"MAZDA" + " " + e.model1}
                    path={paths[3]}
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
              <form
                className="form-container-cards-main-add"
                onSubmit={handleSubmit}
              >
                <div className="fields">
                  <div>
                    {" "}
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Модель{" "}
                      </InputLabel>
                      <BootstrapInput
                        onChange={handleChangeCurrentModel}
                        value={currentModel}
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
                        onChange={handleChangeCurrentType}
                        value={currentType}
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
                        onChange={handleChangeCurrentStartPrice}
                        value={currentStartPrice}
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
                      type="submit"
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
              <form
                className="form-container-cards-main-edit"
                onSubmit={handleSubmitEdit}
              >
                <div className="fields">
                  <div>
                    {" "}
                    <FormControl>
                      <InputLabel htmlFor="demo-customized-textbox">
                        Модель{" "}
                      </InputLabel>
                      <BootstrapInput
                        onChange={handleChangeCurrentModel}
                        value={currentModel}
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
                        onChange={handleChangeCurrentType}
                        value={currentType}
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
                        onChange={handleChangeCurrentStartPrice}
                        value={currentStartPrice}
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
                      type="submit"
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
