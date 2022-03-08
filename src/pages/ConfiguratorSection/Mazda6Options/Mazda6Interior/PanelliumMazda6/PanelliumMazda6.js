import React from "react";
import { Pannellum } from "pannellum-react";
import black_mazda6_interior_drive_acrive from "./interior_mazda6_pictures/interior_mazda6_black_drive&acrive.jpg";
import brown_mazda6_interior_drive_acrive from "./interior_mazda6_pictures/interior_mazda6_light_brown_drive&acrive.jpg";
import deep_brown_supreme from "./interior_mazda6_pictures/interior_mazda6_deep_brown_supreme.jpg";
import "./PanelliumMazda6.css";

const PanelliumMazda6 = (props) => {
  return (
    <div className="container-interior-mazda6-panellium">
      {(props.type === "drive" || props.type === "active") &&
        props.activeButt === 0 && (
          <Pannellum
            width="1350px"
            height="500px"
            image={black_mazda6_interior_drive_acrive}
            pitch={0}
            yaw={90}
            hfov={140}
            autoLoad
            showZoomCtrl={true}
            className="interior-mazda6-panellium"
          >
            <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
          </Pannellum>
        )}
      {(props.type === "drive" || props.type === "active") &&
        props.activeButt === 1 && (
          <Pannellum
            width="1350px"
            height="500px"
            image={brown_mazda6_interior_drive_acrive}
            pitch={0}
            yaw={90}
            hfov={140}
            autoLoad
            showZoomCtrl={true}
            className="interior-mazda6-panellium"
          >
            <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
          </Pannellum>
        )}

      {props.type === "supremeplus" && props.activeButt === 2 && (
        <Pannellum
          width="1350px"
          height="500px"
          image={deep_brown_supreme}
          pitch={0}
          yaw={90}
          hfov={140}
          autoLoad
          showZoomCtrl={true}
          className="interior-mazda6-panellium"
        >
          <Pannellum.Hotspot type="custom" pitch={31} yaw={150} name="hs1" />
        </Pannellum>
      )}
    </div>
  );
};

export default PanelliumMazda6;
