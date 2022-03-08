import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./MazdaCX9InteriorSupreme.css";
import { NewFooter } from "../../../../../components/New Footer/NewFooter";
import PanelliumMazdaCX9 from "../PanelliumMazdaCX9/PanelliumMazdaCX9";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

const MazdaCX9InteriorSupreme = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [type, setType] = useState("supreme");

  const [activeButt, setActiveButt] = useState(0);

  const handleButtChange = (newValue) => {
    setActiveButt(newValue);
  };

  return (
    <>
      <div className="mazdacx9-interior-main-container-supreme">
        <div className="mazdacx9-interior-main-container-header-supreme">
          <h3>ВЫБЕРИТЕ ЦВЕТ ИНТЕРЬЕРА</h3>
          <Link
            to="/mazdacx9config"
            className="mazdacx9-interior-main-container-header-link-supreme"
          >
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazdacx9-interior-main-container-main-part-supreme">
          <div className="mazdacx9-interior-main-container-main-part-panell-supreme">
            <PanelliumMazdaCX9 activeButt={activeButt} type={type} />
          </div>
          <div className="mazdacx9-interior-main-container-main-part-colors-supreme">
            <div className="colorsForPanelliumMazdacx9-container-supreme">
              <Fab
                size="medium"
                style={{
                  backgroundColor: "#222222",
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
                aria-label="add"
                onClick={() => handleButtChange(0)}
              ></Fab>

              <Fab
                size="medium"
                style={{
                  background: "linear-gradient(to right,  #e4e2d6, #554844)",
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
                aria-label="add"
                onClick={() => handleButtChange(1)}
              ></Fab>

              <Fab
                size="medium"
                style={{
                  background: "linear-gradient(to right,  #222222, #554844)",
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
                aria-label="add"
                onClick={() => handleButtChange(2)}
              ></Fab>
            </div>
          </div>
        </div>
        <div className="mazdacx9-equip-details-prices-container">
          <p className="mazdacx9-equip-details-prices-text">
            Цены действительны с 29 декабря 2021 года на автомобили 2021 года
            производства. Подробную информацию уточняйте у официального дилера
            Mazda. Гарантия производителя – 3 года или 100 000 км пробега.
            Количество автомобилей по указанным ценам ограничено. Цены и
            комплектации, указанные в данном прайс-листе, могут быть изменены
            без предварительного уведомления. Информация о ценах на продукцию,
            модельном ряде и комплектациях, представленная в настоящем
            прайс-листе, носит исключительно информационный характер и не
            является офертой, в т. ч. публичной (п. 2 ст. 437 ГК РФ). Указанные
            цены могут отличаться от действующих цен у Официальных Дилеров.
            Приобретение любой продукции осуществляется в соответствии с
            условиями индивидуального договора купли-продажи. Представленная в
            прайс-листе информация о продукции также не означает, что данная
            продукция имеется в наличии у Официальных Дилеров для продажи. Для
            получения информации о наличии автомобилей, актуальных ценах, а
            также подробных сведений об автомобилях вы можете обратиться к
            Официальному Дилеру по вашему выбору.
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaCX9InteriorSupreme;
