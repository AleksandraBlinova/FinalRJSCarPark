import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./MazdaCX9Exterior.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import mazdacx9_exterior_black from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_black.png";
import mazdacx9_exterior_deep_blue from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_deep_blue.png";
import mazdacx9_exterior_machine_grey from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_machine_grey.png";
import mazdacx9_exterior_polymetal_grey from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_polymetal_grey.png";
import mazdacx9_exterior_snowflake from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_snowflake.png";
import mazdacx9_exterior_soul_red from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_soul_red.png";

const MazdaCX9Exterior = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const [activeButt, setActiveButt] = useState(0);
  const handleButtChange = (newValue) => {
    setActiveButt(newValue);
  };
  const [typeofsectionTabs, setTypeofsectionTabs] = useState(1);

  return (
    <>
      <div className="mazdacx9-exterior-tabs-container"></div>
      <div className="mazdacx9-exterior-main-container">
        <div className="mazdacx9-exterior-main-container-header">
          <h3>ВЫБЕРИТЕ ЦВЕТ КУЗОВА</h3>
          <Link
            to="/mazdacx9config"
            className="mazdacx9-exterior-main-container-header-link"
          >
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazdacx9-exterior-main-container-main-part-photos">
          {activeButt === 0 && <img src={mazdacx9_exterior_deep_blue} />}
          {activeButt === 1 && <img src={mazdacx9_exterior_black} />}
          {activeButt === 2 && <img src={mazdacx9_exterior_machine_grey} />}
          {activeButt === 3 && <img src={mazdacx9_exterior_polymetal_grey} />}
          {activeButt === 4 && <img src={mazdacx9_exterior_soul_red} />}
          {activeButt === 5 && <img src={mazdacx9_exterior_snowflake} />}
        </div>
        <div className="mazdacx9-exterior-main-container-main-part-colors">
          <Fab
            size="medium"
            style={{
              backgroundColor: "#1f2a3d",
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
              backgroundColor: "#000",
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
              backgroundColor: "#323334",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
            aria-label="add"
            onClick={() => handleButtChange(2)}
          ></Fab>
          <Fab
            size="medium"
            style={{
              backgroundColor: "#54595d",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
            aria-label="add"
            onClick={() => handleButtChange(3)}
          ></Fab>

          <Fab
            size="medium"
            style={{
              backgroundColor: "#980a09",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
            aria-label="add"
            onClick={() => handleButtChange(4)}
          ></Fab>
          <Fab
            size="medium"
            style={{
              backgroundColor: "#dee1e4",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
            aria-label="add"
            onClick={() => handleButtChange(5)}
          ></Fab>
        </div>
        <div className="mazda6-equip-details-prices-container">
          <p className="mazda6-equip-details-prices-text">
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

export default MazdaCX9Exterior;
