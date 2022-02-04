import React, { useRef } from "react";
import "../ContactsInfo/Contacts.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./ClientsSupport.css";

const ClientsSupport = (props) => {
  return (
    <>
      <div className="hero-container-clients">
        <img
          className="image-bg"
          src="../contactspage/contact_us_hero_01.jpg"
          alt="contact_us_hero"
          style={{ width: "100%" }}
        />

        <h1>ПОДДЕРЖКА КЛИЕНТОВ</h1>
        <div className="hero-container-icon">
          <KeyboardArrowDownIcon
            onClick={props.handleBackClick}
            className="down-link"
          />
        </div>
      </div>
    </>
  );
};

export default ClientsSupport;
