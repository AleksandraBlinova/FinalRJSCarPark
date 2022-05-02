import React from "react";
import { Pannellum } from "pannellum-react";
import interior_mazdacx5_black_drive_active from "./interior_mazdacx5_pictures/interior_mazdacx5_black_drive_active.jpg";
import interior_mazdacx5_black_green_drive_active from "./interior_mazdacx5_pictures/interior_mazdacx5_black_green_drive_active.jpg";
import interior_mazdacx5_black_supreme from "./interior_mazdacx5_pictures/interior_mazdacx5_black_supreme.jpg";
import interior_mazdacx5_deep_grey_supreme from "./interior_mazdacx5_pictures/interior_mazdacx5_deep_grey_supreme.jpg";
import interior_mazdacx5_white_supreme from "./interior_mazdacx5_pictures/interior_mazdacx5_white_supreme.jpg";

import "./PanelliumMazdaCX5.css";

const PanelliumMazdaCX5 = (props) => {
  return (
    <div className="container-interior-mazdacx5-panellium">
      {(props.type === "drive" ||
        props.type === "activelight" ||
        props.type === "activehard") &&
        props.activeButt === 0 && (
          <Pannellum
            width="1350px"
            height="500px"
            image={interior_mazdacx5_black_drive_active}
            pitch={0}
            yaw={90}
            hfov={140}
            autoLoad
            showZoomCtrl={true}
            className="interior-mazdacx5-panellium"
          >
            <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
          </Pannellum>
        )}
      {(props.type === "drive" ||
        props.type === "activelight" ||
        props.type === "activehard") &&
        props.activeButt === 1 && (
          <Pannellum
            width="1350px"
            height="500px"
            image={interior_mazdacx5_black_green_drive_active}
            pitch={0}
            yaw={90}
            hfov={140}
            autoLoad
            showZoomCtrl={true}
            className="interior-mazdacx5-panellium"
          >
            <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
          </Pannellum>
        )}

      {props.type === "supreme" && props.activeButt === 2 && (
        <Pannellum
          width="1350px"
          height="500px"
          image={interior_mazdacx5_black_supreme}
          pitch={0}
          yaw={90}
          hfov={140}
          autoLoad
          showZoomCtrl={true}
          className="interior-mazdacx5-panellium"
        >
          <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
        </Pannellum>
      )}

      {props.type === "supreme" && props.activeButt === 7 && (
        <Pannellum
          width="1350px"
          height="500px"
          image={interior_mazdacx5_deep_grey_supreme}
          pitch={0}
          yaw={90}
          hfov={140}
          autoLoad
          showZoomCtrl={true}
          className="interior-mazdacx5-panellium"
        >
          <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
        </Pannellum>
      )}

      {props.type === "supreme" && props.activeButt === 8 && (
        <Pannellum
          width="1350px"
          height="500px"
          image={interior_mazdacx5_white_supreme}
          pitch={0}
          yaw={90}
          hfov={140}
          autoLoad
          showZoomCtrl={true}
          className="interior-mazdacx5-panellium"
        >
          <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
        </Pannellum>
      )}
    </div>
  );
};

export default PanelliumMazdaCX5;
