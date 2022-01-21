import * as React from "react";
import "./FeedbackLink.css";
import { Typography } from "antd";

export default function FeedbackLink() {
  return (
    <>
      <h1 className="title-h1">ОБРАТНАЯ СВЯЗЬ</h1>
      <div className="feedback_info">
        <Typography className="feedback_text">
          Если вам неудобно звонить на инфо-линию Mazda, есть возможность задать
          вопрос на интересующие вас темы о Mazda, заполнив форму
          <a href="#" className="feedback_link">
            «Обратная связь»
          </a>
        </Typography>
      </div>
      <></>
    </>
  );
}
