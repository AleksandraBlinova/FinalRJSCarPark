import * as React from "react";
import "./FeedbackLink.css";
import { Link } from "react-router-dom";

export default function FeedbackLink() {
  return (
    <>
      <div className="feedback_info">
        <p className="feedback_text">
          Если вам неудобно звонить на инфо-линию Mazda, есть возможность задать
          вопрос на интересующие вас темы о Mazda
          {/* вопрос на интересующие вас темы о Mazda, заполнив форму
          <Link to="#" className="feedback_link">
            «Обратная связь»
          </Link> */}
          .
        </p>
      </div>
      <></>
    </>
  );
}
