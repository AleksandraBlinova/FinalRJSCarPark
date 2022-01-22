import React, { useRef } from "react";
import "./Contacts.css";
import Footer from "../../../components/Footer/Footer";
import AdditionalInfo from "../AdditionalInfo/AdditionalGeneral/AdditionalInfo";
import FeedbackLink from "../FeedbackLink/FeedbackLink";
import SocialMediaLinks from "../SociaMediaLinks/SociaMediaLinks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
} from "./ContactsElements.style";

const Contacts = () => {
  const titleRef = useRef();
  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
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
              onClick={handleBackClick}
              className="down-link"
            />
          </HeroContent>
        </HeroContainer>

        <h1 ref={titleRef} className="title-h1">
          МЫ ВСЕГДА РАДЫ ВАМ ПОМОЧЬ И ОТВЕТИТЬ НА ЛЮБЫЕ ВАШИ ВОПРОСЫ
        </h1>

        <p className="text">
          Большое спасибо за интерес к Mazda! Будучи открытой компанией, мы
          поддерживаем <p className="pad"></p>
          стремление клиентов к общению с Mazda. Для вашего удобства мы
          постоянно расширяем <p className="pad"></p>
          количество каналов, через которые вы можете задать тот или иной
          вопрос, будь то интерес<p className="pad"></p>к конкретной модели
          Mazda или интерес к сервисам, которые вам всегда готовы оказать{" "}
          <p className="pad"></p>
          дилеры Mazda, либо вы просто хотите высказать свое мнение или сделать
          предложение.
        </p>
        <p className="adress">
          Адрес: 125171, г.Москва, Ленинградское шоссе, 16А, стр.2 БЦ
          "Метрополис"
        </p>
      </div>
      <AdditionalInfo />
      <FeedbackLink />
      <SocialMediaLinks />

      <Footer />
    </>
  );
};

export default Contacts;
