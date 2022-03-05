import React from "react";
import { Pannellum } from "pannellum-react";
import interior_mazdacx9_black from "./interior_mazdacx9_pictures/interior_mazdacx9_black.jpg";
import interior_mazdacx9_dark_white from "./interior_mazdacx9_pictures/interior_mazdacx9_dark_white.jpg";
import interior_mazdacx9_deep_grey from "./interior_mazdacx9_pictures/interior_mazdacx9_deep_grey.jpg";

import "./PanelliumMazdaCX9.css";

const PanelliumMazdaCX9 = (props) => {
  return (
    <div className="container-interior-mazdacx9-panellium">
      {(props.type === "supreme" ||
        props.type === "active" ||
        props.type === "exclusive") &&
        props.activeButt === 0 && (
          <Pannellum
            width="1350px"
            height="500px"
            image={interior_mazdacx9_black}
            pitch={0}
            yaw={90}
            hfov={140}
            autoLoad
            showZoomCtrl={true}
            className="interior-mazdacx9-panellium"
          >
            <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
          </Pannellum>
        )}

      {(props.type === "supreme" ||
        props.type === "active" ||
        props.type === "exclusive") &&
        props.activeButt === 1 && (
          <Pannellum
            width="1350px"
            height="500px"
            image={interior_mazdacx9_dark_white}
            pitch={0}
            yaw={90}
            hfov={140}
            autoLoad
            showZoomCtrl={true}
            className="interior-mazdacx9-panellium"
          >
            <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
          </Pannellum>
        )}

      {(props.type === "supreme" ||
        props.type === "active" ||
        props.type === "exclusive") &&
        props.activeButt === 2 && (
          <Pannellum
            width="1350px"
            height="500px"
            image={interior_mazdacx9_deep_grey}
            pitch={0}
            yaw={90}
            hfov={140}
            autoLoad
            showZoomCtrl={true}
            className="interior-mazdacx9-panellium"
          >
            <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
          </Pannellum>
        )}
    </div>
  );
};

export default PanelliumMazdaCX9;
