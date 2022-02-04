import React, { useRef } from "react";
import "./Contacts.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import AccordionComponents from "../Accordion/AccordionComponents";
import ClientsSupport from "../ClientsSupport/ClientsSupport";
import GeneralInfo from "../GeneralInfo/GeneralInfo";

const Contacts = () => {
  const titleRef = useRef();
  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="contacts-main-container">
      <ClientsSupport handleBackClick={handleBackClick} />
      <h1 ref={titleRef} className="title-h1">
        МЫ ВСЕГДА РАДЫ ВАМ ПОМОЧЬ И ОТВЕТИТЬ НА ЛЮБЫЕ ВАШИ ВОПРОСЫ
      </h1>
      <GeneralInfo />
      <AccordionComponents />
      <NewFooter />
    </div>
  );
};

export default Contacts;
