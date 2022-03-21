import React from "react";
import "./MazdaDealer.css";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";

import POINTSMOSCOW from "./pointsMoscow";

const mapState = {
  center: [55.751574, 37.573856],
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
    setSelectedPoint({ selectedPoint: point });
  };

  const [valueLabel, setValueLabel] = React.useState("Москва");

  const handleChangeLabel = (value) => {
    setValueLabel(value.label);
  };

  const cities = [{ label: "Москва" }, { label: "Владимир" }];
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
      </div>
      <div className="mazda-dealer-map">
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
            {selectedPoint && (
              <div>
                <h2 style={{ color: "black", marginTop: "30px" }}>
                  Выбранный дилерский центр: {selectedPoint.title}
                </h2>
                <p>{selectedPoint.descr}</p>
              </div>
            )}
          </Map>
        </YMaps>
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaDealer;
