import * as React from "react";
import "./NumberInfo.css";
import { Typography } from "antd";

export default function NumberInfo(props) {
  return (
    <>
      <li className="contacts__item">
        <figure className="contacts__item__pic-wrap">
          <img
            className="contacts__item__img"
            alt="ContactsImage"
            src={props.src}
          />
        </figure>
      </li>

      <></>
    </>
  );
}
