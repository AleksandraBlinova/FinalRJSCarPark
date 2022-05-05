import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">
        Регистрация выполнена успешно!
        <div>
          <span className="form-input-success">
            Выполнить вход можно<Link to="/login"> здесь</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;
