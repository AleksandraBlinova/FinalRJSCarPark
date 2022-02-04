import React from "react";
import "./Generalinfo.css";

const GeneralInfo = () => {
  return (
    <>
      <div className="general-info-container">
        <img
          className="general-info-img"
          src="../contactspage/credit_vacations_range_1800x900.jpg"
        />
        <div className="text-container">
          <p className="text">
            Большое спасибо за интерес к Mazda! Будучи открытой компанией, мы
            поддерживаем стремление клиентов к общению с Mazda. Для вашего
            удобства мы постоянно расширяем количество каналов, через которые вы
            можете задать тот или иной вопрос, будь то интереск конкретной
            модели Mazda или интерес к сервисам, которые вам всегда готовы
            оказать дилеры Mazda, либо вы просто хотите высказать свое мнение
            или сделать предложение.
          </p>
          <p className="adress">
            Адрес: 125171, г.Москва, Ленинградское шоссе, 16А, стр.2 БЦ
            "Метрополис"
          </p>
        </div>
      </div>
    </>
  );
};

export default GeneralInfo;
