import React, { useState, useEffect } from "react";
import "./MazdaDealer.css";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import axios from "axios";

import POINTSMOSCOW from "./pointsMoscow";
import POINTSVLADIMIR from "./pointsVladimir";
import POINTSSANTPET from "./pointSantPet";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
  behaviors: ["default", "scrollZoom"],
  controls: ["zoomControl", "fullscreenControl"],
};

const mapStateVladimir = {
  center: [56.129068, 40.406598],
  zoom: 9,
  behaviors: ["default", "scrollZoom"],
  controls: ["zoomControl", "fullscreenControl"],
};

const mapStateSantPet = {
  center: [59.93909, 30.315831],
  zoom: 9,
  behaviors: ["default", "scrollZoom"],
  controls: ["zoomControl", "fullscreenControl"],
};

const CustomAutocomplete = styled(Autocomplete)({
  padding: "0px",
  width: "215px",
  margin: "0 auto",
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

const MazdaDealer = () => {
  const [selectedPoint, setSelectedPoint] = React.useState();
  const onPlacemarkClick = (point) => () => {
    setSelectedPoint(point);
  };
  const [warehouses, setWarehouses] = useState([]);
  const [currentWarehouse, setCurrentWarehouse] = useState(""); //new
  const [currentIdW, setCurrentWarehouseId] = useState(""); //new
  const [loadWWFlag, setLoadWWFlag] = useState(false);
  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/warehouses/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setWarehouses(response.data);
        setLoadWWFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cities = ["????????????", "????????????????", "??????????-??????????????????"];

  const [valueLabel, setValueLabel] = React.useState("????????????");

  const [value, setValue] = React.useState(cities[0]);

  return (
    <>
      <div className="mazda-dealer-choose-city">
        <h3>???????????????? ??????????</h3>
        <div className="mazda-dealer-choose-city-autocomplete">
          <CustomAutocomplete
            id="controllable-states-demo"
            options={cities}
            size="medium"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={valueLabel}
            onInputChange={(event, newInputValue) => {
              setValueLabel(newInputValue);
            }}
            renderInput={(params) => <TextField {...params} label="??????????" />}
          />
        </div>
      </div>
      <div className="mazda-dealer-header">
        {valueLabel !== "" && (
          <h3>?????????????????????? ???????????? Mazda ?? ??. {valueLabel}</h3>
        )}

        {valueLabel == "" && <h3>?????????????????????? ???????????? Mazda ?? ?????????? ????????????</h3>}
        <p style={{ paddingTop: "40px", color: "black" }}>
          ?????????????? ???????????????????? ???????????? ?????? ???????????? ??????????, ???????????? ???????????? ?????????? ????
          ????????????.
        </p>
        <p style={{ paddingTop: "0px", color: "black", marginTop: "0px" }}>
          ?????? ?????????????? ???????????? ?????????????? ????????????????, ??????????, ???????????????????? ?????????????? ??
          ??????-????????????.
        </p>
      </div>
      {valueLabel !== "" && selectedPoint !== undefined && (
        <div className="mazda-dealer-map">
          {valueLabel == "????????????" && (
            <YMaps>
              <Map
                defaultState={mapState}
                width="100%"
                height="400px"
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                {warehouses
                  .filter((i) => i.region.regionName == "????????????")
                  .map((point, index) => (
                    <Placemark
                      key={index}
                      modules={["geoObject.addon.balloon"]}
                      geometry={[point.latitude, point.longitude]}
                      onClick={onPlacemarkClick(point)}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: "/ic_pin_black.svg",
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44],
                      }}
                      properties={{
                        balloonContentHeader: point.warehouse1,
                        balloonContentBody: point.address,
                        balloonContentFooter: point.number,
                      }}
                    />
                  ))}
              </Map>
            </YMaps>
          )}

          {valueLabel == "????????????????" && (
            <YMaps>
              <Map
                defaultState={mapStateVladimir}
                width="100%"
                height="400px"
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                {warehouses
                  .filter((i) => i.region.regionName == "????????????????")
                  .map((point, index) => (
                    <Placemark
                      key={index}
                      modules={["geoObject.addon.balloon"]}
                      geometry={[point.latitude, point.longitude]}
                      onClick={onPlacemarkClick(point)}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: "/ic_pin_black.svg",
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44],
                      }}
                      properties={{
                        balloonContentHeader: point.warehouse1,
                        balloonContentBody: point.address,
                        balloonContentFooter: point.number,
                      }}
                    />
                  ))}
              </Map>
            </YMaps>
          )}

          {valueLabel == "??????????-??????????????????" && (
            <YMaps>
              <Map
                defaultState={mapStateSantPet}
                width="100%"
                height="400px"
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                {warehouses
                  .filter((i) => i.region.regionName == "??????????-??????????????????")
                  .map((point, index) => (
                    <Placemark
                      key={index}
                      modules={["geoObject.addon.balloon"]}
                      geometry={[point.latitude, point.longitude]}
                      onClick={onPlacemarkClick(point)}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: "/ic_pin_black.svg",
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44],
                      }}
                      properties={{
                        balloonContentHeader: point.warehouse1,
                        balloonContentBody: point.address,
                        balloonContentFooter: point.number,
                      }}
                    />
                  ))}
              </Map>
            </YMaps>
          )}

          {selectedPoint && (
            <div className="selected-point">
              <h2
                style={{
                  color: "black",
                  marginTop: "50px",
                  marginBottom: "70px",
                }}
              >
                ?????????????????? ?????????????????? ??????????:
              </h2>
              <div className="card-selected-point">
                <h4 style={{ color: "black" }}>{selectedPoint.warehouse1}</h4>
                <p style={{ color: "#999999" }}>
                  ??????????: &nbsp; {selectedPoint.address}
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  ???????????????????? ??????????: &nbsp; {selectedPoint.number}
                </p>
                <p className="card-selected-point-p">
                  ??????-????????????: &nbsp;
                  <a href={selectedPoint.website}>{selectedPoint.website}</a>
                </p>
                <img style={{ width: "80px" }} src="/favicon.ico" />
              </div>
            </div>
          )}
        </div>
      )}

      {valueLabel !== "" && selectedPoint == undefined && (
        <div className="mazda-dealer-map" style={{ height: "60vh" }}>
          {valueLabel == "????????????" && (
            <YMaps>
              <Map
                defaultState={mapState}
                width="100%"
                height="400px"
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                {warehouses
                  .filter((i) => i.region.regionName == "????????????")
                  .map((point, index) => (
                    <Placemark
                      key={index}
                      modules={["geoObject.addon.balloon"]}
                      geometry={[point.latitude, point.longitude]}
                      onClick={onPlacemarkClick(point)}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: "/ic_pin_black.svg",
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44],
                      }}
                      properties={{
                        balloonContentHeader: point.warehouse1,
                        balloonContentBody: point.address,
                        balloonContentFooter: point.number,
                      }}
                    />
                  ))}
              </Map>
            </YMaps>
          )}

          {valueLabel == "????????????????" && (
            <YMaps>
              <Map
                defaultState={mapStateVladimir}
                width="100%"
                height="400px"
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                {warehouses
                  .filter((i) => i.region.regionName == "????????????????")
                  .map((point, index) => (
                    <Placemark
                      key={index}
                      modules={["geoObject.addon.balloon"]}
                      geometry={[point.latitude, point.longitude]}
                      onClick={onPlacemarkClick(point)}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: "/ic_pin_black.svg",
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44],
                      }}
                      properties={{
                        balloonContentHeader: point.warehouse1,
                        balloonContentBody: point.address,
                        balloonContentFooter: point.number,
                      }}
                    />
                  ))}
              </Map>
            </YMaps>
          )}

          {valueLabel == "??????????-??????????????????" && (
            <YMaps>
              <Map
                defaultState={mapStateSantPet}
                width="100%"
                height="400px"
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                {warehouses
                  .filter((i) => i.region.regionName == "??????????-??????????????????")
                  .map((point, index) => (
                    <Placemark
                      key={index}
                      modules={["geoObject.addon.balloon"]}
                      geometry={[point.latitude, point.longitude]}
                      onClick={onPlacemarkClick(point)}
                      options={{
                        iconLayout: "default#image",
                        iconImageHref: "/ic_pin_black.svg",
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44],
                      }}
                      properties={{
                        balloonContentHeader: point.warehouse1,
                        balloonContentBody: point.address,
                        balloonContentFooter: point.number,
                      }}
                    />
                  ))}
              </Map>
            </YMaps>
          )}

          {selectedPoint && (
            <div className="selected-point">
              <h2
                style={{
                  color: "black",
                  marginTop: "50px",
                  marginBottom: "70px",
                }}
              >
                ?????????????????? ?????????????????? ??????????:
              </h2>
              <div className="card-selected-point">
                <h4 style={{ color: "black" }}>{selectedPoint.warehouse1}</h4>
                <p style={{ color: "#999999" }}>
                  ??????????: &nbsp; {selectedPoint.address}
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  ???????????????????? ??????????: &nbsp; {selectedPoint.number}
                </p>
                <p className="card-selected-point-p">
                  ??????-????????????: &nbsp;
                  <a href={selectedPoint.website}>{selectedPoint.website}</a>
                </p>
                <img style={{ width: "80px" }} src="/favicon.ico" />
              </div>
            </div>
          )}
        </div>
      )}

      <NewFooter />
    </>
  );
};

export default MazdaDealer;
