import React, { useState } from "react";
import "./Insurance.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { Link } from "react-router-dom";
import mazdadriveinsurance from "./mobile_ksp_1800x809_design.jpg";
import mazdaminidriveinsurance from "./gallery_preview_900x450.jpg";
import { Button } from "@material-ui/core";

const Insurance = () => {
  return (
    <>
      <div className="insurance-start-container">
        <h2>СТРАХОВОЙ КАЛЬКУЛЯТОР</h2>
        <p>Специальные программы Mazda Страхование делают КАСКО доступным.</p>
        <p> Подберите программу, которая подходит именно Вам.</p>
        <Button
          to="#"
          style={{
            borderRadius: "50px",
            whiteSpace: "nowrap",
            outline: "none",
            backgroundColor: "#fff ",
            borderColor: "black",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "black",
            padding: "30px 12px  30px",
            width: "220px",
            height: "60px",
            transition: "all 0.2s ease-in-out",
          }}
        >
          Рассчитать страховку
        </Button>
      </div>
      <div className="insurance-main-container">
        <h2>КАСКО ДЛЯ ВАШЕЙ MAZDA С ВЫГОДОЙ</h2>
        <div className="insurance-main-container-p-container">
          <p>
            Оформление полиса КАСКО стал стандартной процедурой для современных
            водителей. Мы знаем свои автомобили и полностью уверены в людях,
            которые их выбирают. Именно поэтому мы разработали специальное
            предложение по страхованию КАСКО для владельцев Mazda.
          </p>
        </div>
        <div className="insurance-main-container-drive">
          <img src={mazdadriveinsurance} />
          <div className="insurance-main-container-drive-text">
            <h5 style={{ marginBottom: "30px" }}>MAZDA СТРАХОВАНИЕ ДРАЙВ!</h5>
            <p style={{ marginBottom: "40px", fontSize: "15px" }}>
              Тариф программы не зависит от возраста или стажа. Программа
              гарантирует страховое возмещение по основным рискам.
            </p>

            <Button
              href="/insurancedrive"
              style={{
                borderRadius: "50px",
                whiteSpace: "nowrap",
                outline: "none",
                backgroundColor: "#000",
                borderColor: "black",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: "white",
                padding: "30px 42px  30px",
                width: "220px",
                height: "60px",
                transition: "all 0.2s ease-in-out",
                marginRight: "auto",
              }}
            >
              Узнать больше
            </Button>
          </div>
        </div>

        <div className="insurance-main-container-mini-drive">
          <div className="insurance-main-container-mini-drive-text">
            <h5 style={{ marginBottom: "30px" }}>
              MAZDA СТРАХОВАНИЕ МИНИ ДРАЙВ!
            </h5>
            <p style={{ marginBottom: "40px", fontSize: "15px" }}>
              Cамый доступный вариант страхования КАСКО, полностью покрывающий
              основные риски, при этом возраст и стаж владельца, как и стоимость
              автомобиля, не влияет на тариф.
            </p>

            <Button
              href="/insuranceminidrive"
              style={{
                borderRadius: "50px",
                whiteSpace: "nowrap",
                outline: "none",
                backgroundColor: "#000",
                borderColor: "black",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: "white",
                padding: "30px 42px  30px",
                width: "220px",
                height: "60px",
                transition: "all 0.2s ease-in-out",
                marginLeft: "auto",
              }}
            >
              Узнать больше
            </Button>
          </div>
          <img src={mazdaminidriveinsurance} />
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Insurance;
