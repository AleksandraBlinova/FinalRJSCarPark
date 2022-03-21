import React from "react";
import "./MazdaDealer.css";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
import { NewFooter } from "../../../components/New Footer/NewFooter";

import POINTSMOSCOW from "./pointsMoscow";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
  behaviors: ["default", "scrollZoom"],
  controls: ["zoomControl", "fullscreenControl"],
};

const MazdaDealer = () => {
  const [selectedPoint, setSelectedPoint] = React.useState();
  const onPlacemarkClick = (point) => () => {
    setSelectedPoint({ selectedPoint: point });
  };
  return (
    <>
      <div className="mazda-dealer-header">
        <h3>Официальные дилеры Mazda в г. Москва</h3>
      </div>
      <div className="mazda-dealer-map">
        <YMaps>
          <Map
            defaultState={mapState}
            width="100%"
            height="500px"
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
