import React from "react";
import "./Contacts.css";
import Footer from "../../../components/Footer/Footer";
import AdditionalInfo from "../AdditionalInfo/AdditionalGeneral/AdditionalInfo";
import FeedbackLink from "../FeedbackLink/FeedbackLink";
import SocialMediaLinks from "../SociaMediaLinks/SociaMediaLinks";

const Contacts = () => {
  return (
    <>
      <div>
        <h1 className="title-h1">
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
