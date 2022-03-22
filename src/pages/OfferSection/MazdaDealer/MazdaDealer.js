import React from "react";
import "./MazdaDealer.css";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";

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
  width: "400px",
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

  const [valueLabel, setValueLabel] = React.useState("Москва");

  const handleChangeLabel = (value) => {
    setValueLabel(value.label);
  };

  const cities = [
    { label: "Москва" },
    { label: "Владимир" },
    { label: "Санкт-Петербург" },
  ];
  return (
    <>
      <div className="mazda-dealer-choose-city">
        <h3>Выберите город</h3>
        <div className="mazda-dealer-choose-city-autocomplete">
          <CustomAutocomplete
            id="combo-box-demo"
            options={cities}
            size="medium"
            defaultValue={cities[0].label.toString()}
            onChange={(event, value) => handleChangeLabel(value)}
            renderInput={(params) => (
              <TextField {...params} value={valueLabel} label="Город" />
            )}
          />
        </div>
      </div>
      <div className="mazda-dealer-header">
        <h3>Официальные дилеры Mazda в г. {valueLabel}</h3>
        <p style={{ paddingTop: "40px", color: "black" }}>
          Найдите ближайшего дилера при помощи карты, выбрав нужный город из
          списка.
        </p>
        <p style={{ paddingTop: "0px", color: "black", marginTop: "0px" }}>
          Для каждого дилера указаны название, адрес, контактный телефон и
          веб-ресурс.
        </p>
      </div>
      <div className="mazda-dealer-map">
        {valueLabel == "Москва" && (
          <YMaps>
            <Map
              defaultState={mapState}
              width="100%"
              height="400px"
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              {POINTSMOSCOW.map((point, index) => (
                <Placemark
                  key={index}
                  modules={["geoObject.addon.balloon"]}
                  geometry={point.coords}
                  onClick={onPlacemarkClick(point)}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/ic_pin_black.svg",
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44],
                  }}
                  properties={{
                    balloonContentHeader: point.title,
                    balloonContentBody: point.descr,
                    balloonContentFooter: point.number,
                  }}
                />
              ))}
            </Map>
          </YMaps>
        )}

        {valueLabel == "Владимир" && (
          <YMaps>
            <Map
              defaultState={mapStateVladimir}
              width="100%"
              height="400px"
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              {POINTSVLADIMIR.map((point, index) => (
                <Placemark
                  key={index}
                  modules={["geoObject.addon.balloon"]}
                  geometry={point.coords}
                  onClick={onPlacemarkClick(point)}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/ic_pin_black.svg",
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44],
                  }}
                  properties={{
                    balloonContentHeader: point.title,
                    balloonContentBody: point.descr,
                    balloonContentFooter: point.number,
                  }}
                />
              ))}
            </Map>
          </YMaps>
        )}

        {valueLabel == "Санкт-Петербург" && (
          <YMaps>
            <Map
              defaultState={mapStateSantPet}
              width="100%"
              height="400px"
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
              {POINTSSANTPET.map((point, index) => (
                <Placemark
                  key={index}
                  modules={["geoObject.addon.balloon"]}
                  geometry={point.coords}
                  onClick={onPlacemarkClick(point)}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/ic_pin_black.svg",
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44],
                  }}
                  properties={{
                    balloonContentHeader: point.title,
                    balloonContentBody: point.descr,
                    balloonContentFooter: point.number,
                  }}
                />
              ))}
            </Map>
          </YMaps>
        )}

        {selectedPoint && (
          <div>
            <h2
              style={{
                color: "black",
                marginTop: "50px",
                marginBottom: "70px",
              }}
            >
              Выбранный дилерский центр:
            </h2>
            <div className="card-selected-point">
              <h4 style={{ color: "black" }}>{selectedPoint.title}</h4>
              <p style={{ color: "#999999" }}>
                Адрес: &nbsp; {selectedPoint.descr}
              </p>
              <p
                style={{ color: "black", fontSize: "16px", fontWeight: "500" }}
              >
                Контактный номер: &nbsp; {selectedPoint.number}
              </p>
              <p className="card-selected-point-p">
                Веб-ресурс: &nbsp;
                <a href={selectedPoint.website}>{selectedPoint.website}</a>
              </p>
              <img style={{ width: "80px" }} src="/favicon.ico" />
            </div>
          </div>
        )}
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaDealer;
