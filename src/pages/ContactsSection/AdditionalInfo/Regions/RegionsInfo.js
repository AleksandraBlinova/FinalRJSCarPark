import * as React from "react";
import "./Region.css";
import { Typography } from "antd";

export default function RegionsInfo(props) {
  return (
    <>
      <div className="contacts__item__region">
        <Typography className="contacts__item__regionText">
          {props.label}
        </Typography>
      </div>
    </>
  );
}
