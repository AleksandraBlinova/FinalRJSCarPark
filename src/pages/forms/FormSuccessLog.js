import React from "react";
import "./Form.css";

const FormSuccessLog = ({ NameofUser }) => {
  return (
    <div className="form-content-right">
      <div className="form-success">
        Выполнен вход пользователем <h4>{NameofUser}</h4>
      </div>
    </div>
  );
};

export default FormSuccessLog;
