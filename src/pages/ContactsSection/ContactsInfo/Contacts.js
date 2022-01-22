import React, { useRef } from "react";
import "./Contacts.css";
import Footer from "../../../components/Footer/Footer";
import AdditionalInfo from "../AdditionalInfo/AdditionalGeneral/AdditionalInfo";
import FeedbackLink from "../FeedbackLink/FeedbackLink";
import SocialMediaLinks from "../SociaMediaLinks/SociaMediaLinks";
import ClientsSupport from "../ClientsSupport/ClientsSupport";
import GeneralInfo from "../GeneralInfo/GeneralInfo";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Contacts = () => {
  const titleRef = useRef();
  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div>
        <ClientsSupport handleBackClick={handleBackClick} />
        <h1 ref={titleRef} className="title-h1">
          МЫ ВСЕГДА РАДЫ ВАМ ПОМОЧЬ И ОТВЕТИТЬ НА ЛЮБЫЕ ВАШИ ВОПРОСЫ
        </h1>
        <GeneralInfo />
      </div>
      <div className="accordion">
        <Accordion style={{ boxShadow: "none" }} className="accordion_element">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="1-content"
            id="1-header"
          >
            <Typography className="accordion_element_text">
              ИНФО-ЛИНИЯ MAZDA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AdditionalInfo />
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ boxShadow: "none" }} className="accordion_element">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="2-content"
            id="2-header"
          >
            <Typography className="accordion_element_text">
              ОБРАТНАЯ СВЯЗЬ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FeedbackLink />
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ boxShadow: "none" }} className="accordion_element">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="3-content"
            id="3-header"
          >
            <Typography className="accordion_element_text">
              MAZDA В СОЦИАЛЬНЫХ СЕТЯХ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SocialMediaLinks />
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
