import React, { useRef } from "react";
import "../ContactsInfo/Contacts.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
} from "../ContactsInfo/ContactsElements.style";

const ClientsSupport = (props) => {
  return (
    <>
      <div>
        <HeroContainer>
          <HeroBg>
            <img
              src="../contactspage/contact_us_hero_01.jpg"
              alt="contact_us_hero"
              style={{ width: "100%" }}
            />
          </HeroBg>
          <HeroContent>
            <HeroH1>СВЯЗАТЬСЯ С НАМИ</HeroH1>
            <HeroH1>ПОДДЕРЖКА КЛИЕНТОВ</HeroH1>

            <KeyboardArrowDownIcon
              sx={{ fontSize: 80 }}
              style={{
                marginLeft: 350,
              }}
              onClick={props.handleBackClick}
              className="down-link"
            />
          </HeroContent>
        </HeroContainer>
      </div>
    </>
  );
};

export default ClientsSupport;
