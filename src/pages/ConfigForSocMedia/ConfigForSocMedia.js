import React, { useState, useEffect, useParams } from "react";
import { Link } from "react-router-dom";
import { NewFooter } from "../../components/New Footer/NewFooter";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import axios from "axios";
import "./ConfigForSocMedia.css";

const ConfigForSocMedia = (props) => {
  const [clientConfig, setClientConfig] = useState();
  const [clientConfigFlag, setClientConfigFlag] = useState(false);

  const params = window.location.href;

  const [clientConfigGuid, setClientConfigGuid] = useState(params.slice(40));

  const [clientConfigPerformance, setClientConfigPerformance] = useState();
  const [clientConfigPerformanceFlag, setClientConfigPerformanceFlag] =
    useState(false);

  const [clientConfigDrive, setClientConfigDrive] = useState();
  const [clientConfigDriveFlag, setClientConfigDriveFlag] = useState(false);

  const [clientConfigGrade, setClientConfigGrade] = useState();
  const [clientConfigGradeFlag, setClientConfigGradeFlag] = useState(false);

  const [clientConfigModel, setClientConfigModel] = useState();
  const [clientConfigModelFlag, setClientConfigModelFlag] = useState(false);

  const [clientConfigEngine, setClientConfigEngine] = useState();
  const [clientConfigEngineFlag, setClientConfigEngineFlag] = useState(false);

  const [clientConfigColor, setClientConfigColor] = useState();
  const [clientConfigColorFlag, setClientConfigColorFlag] = useState(false);

  const [clientConfigColorInterior, setClientConfigColorInterior] = useState();
  const [clientConfigColorInteriorFlag, setClientConfigColorInteriorFlag] =
    useState(false);

  const [clientConfigTransm, setClientConfigTransm] = useState();
  const [clientConfigTransmFlag, setClientConfigTransmFlag] = useState(false);

  const [clientConfigExtraServ, setClientConfigExtraServ] = useState();
  const [clientConfigExtraServFlag, setClientConfigExtraServFlag] =
    useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:7831/api/cars/${clientConfigGuid}`,
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setClientConfig(response.data);

        axios({
          method: "GET",
          url: `http://localhost:7831/api/performances/${response.data.performanceId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigPerformance(response.data);
            setClientConfigPerformanceFlag(true);
            axios({
              method: "GET",
              url: `http://localhost:7831/api/transm/${response.data.transmId}`,
              headers: {
                "content-type": "application/json",
                withCredentials: true,
              },
            })
              .then((response) => {
                setClientConfigTransm(response.data);
                setClientConfigTransmFlag(true);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
        setClientConfigFlag(true);

        axios({
          method: "GET",
          url: `http://localhost:7831/api/drives/${response.data.driveId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigDrive(response.data);
            setClientConfigDriveFlag(true);
          })
          .catch((error) => {
            console.log(error);
          });

        axios({
          method: "GET",
          url: `http://localhost:7831/api/grades/${response.data.gradeId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigGrade(response.data);
            setClientConfigGradeFlag(true);
          })
          .catch((error) => {
            console.log(error);
          });

        axios({
          method: "GET",
          url: `http://localhost:7831/api/allmodels/${response.data.modelId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigModel(response.data);
            setClientConfigModelFlag(true);
          })
          .catch((error) => {
            console.log(error);
          });

        axios({
          method: "GET",
          url: `http://localhost:7831/api/engines/${response.data.engineId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigEngine(response.data);
            setClientConfigEngineFlag(true);
          })
          .catch((error) => {
            console.log(error);
          });

        axios({
          method: "GET",
          url: `http://localhost:7831/api/colors/${response.data.colorId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigColor(response.data);
            setClientConfigColorFlag(true);
          })
          .catch((error) => {
            console.log(error);
          });

        axios({
          method: "GET",
          url: `http://localhost:7831/api/colorsinterior/${response.data.colorInteriorId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigColorInterior(response.data);
            setClientConfigColorInteriorFlag(true);
          })
          .catch((error) => {
            console.log(error);
          });

        axios({
          method: "GET",
          url: `http://localhost:7831/api/extraservices/${response.data.extraServiceId}`,
          headers: {
            "content-type": "application/json",
            withCredentials: true,
          },
        })
          .then((response) => {
            setClientConfigExtraServ(response.data);
            setClientConfigExtraServFlag(true);
          })
          .catch((error) => {
            console.log(error);
          });
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {" "}
      <div className="final-data-mazda6">
        {clientConfigFlag &&
          clientConfigPerformanceFlag &&
          clientConfigDriveFlag &&
          clientConfigGradeFlag &&
          clientConfigModelFlag &&
          clientConfigEngineFlag &&
          clientConfigColorFlag &&
          clientConfigColorInteriorFlag &&
          clientConfigExtraServFlag &&
          clientConfigTransmFlag && (
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
                <h5>Mazda &nbsp;{clientConfigModel.model1}</h5>
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
                <h5>{clientConfigGrade.grade1}</h5>
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
                  {clientConfigColor.color1}&nbsp;&nbsp;
                  {clientConfigColor.colorExtraCost}
                  &nbsp;₽&nbsp;&nbsp;&nbsp;&nbsp;
                </h5>
                <Fab
                  size="small"
                  style={{ background: clientConfigColor.colorView }}
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
                <h5> {clientConfigColorInterior.colorInterior1}</h5>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <Fab
                  size="small"
                  style={{
                    background: clientConfigColorInterior.colorInteriorView,
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
                  <h5>{clientConfigEngine.engine1}</h5>
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
                  <h5>{clientConfigPerformance.hp} </h5>
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
                  <h5>{clientConfigPerformance.torque}</h5>
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
                  <h5>{clientConfigTransm.transmission1}</h5>
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
                  <h5>{clientConfigDrive.drive1}</h5>
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
                  <h5>{clientConfigPerformance.speed} </h5>
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
                  <h5>{clientConfigPerformance.accelerationTime} </h5>
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
                  <h5>{clientConfigPerformance.mixedCycle} </h5>
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
                  <h5>{clientConfigPerformance.trunkVolume} </h5>
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
                  <h5> {clientConfigPerformance.fuelCapacity} </h5>
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
                  <h5>{clientConfigPerformance.recommendedFuel} </h5>
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

                  <h5>
                    {clientConfigExtraServ.extraServName} &nbsp;&nbsp;{" "}
                    {clientConfigExtraServ.extraServCost}&nbsp;₽
                  </h5>
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

                  <h3>{clientConfig.price} &nbsp;₽</h3>
                </ListItem>
              </List>
            </List>
          )}
      </div>{" "}
      <NewFooter />
    </div>
  );
};

export default ConfigForSocMedia;
