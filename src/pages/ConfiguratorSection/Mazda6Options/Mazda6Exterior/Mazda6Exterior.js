import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Mazda6Exterior.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import arctic_white_solid from "./mazda6ExteriorPhotos/arctic_white_solid.jpg";
import mazda6Exterior_deep_blue_crystal_mica from "./mazda6ExteriorPhotos/mazda6Exterior_deep_blue_crystal_mica.jpg";
import mazda6Exterior_jet_black_mica from "./mazda6ExteriorPhotos/mazda6Exterior_jet_black_mica.jpg";
import mazda6Exterior_machine_grey_metallic from "./mazda6ExteriorPhotos/mazda6Exterior_machine_grey_metallic.jpg";
import mazda6Exterior_polymetal_grey_metallic from "./mazda6ExteriorPhotos/mazda6Exterior_polymetal_grey_metallic.jpg";
import mazda6Exterior_soul_red_crystal_metallic from "./mazda6ExteriorPhotos/mazda6Exterior_soul_red_crystal_metallic.jpg";
import TabsExterInterMazda6 from "../Equipment6/TabsExterInterMazda6/TabsExterInterMazda6";

const Mazda6Exterior = (props) => {
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
      <div className="mazda6-exterior-tabs-container"></div>
      <div className="mazda6-exterior-main-container">
        <div className="mazda6-exterior-main-container-header">
          <h3>ВЫБЕРИТЕ ЦВЕТ КУЗОВА</h3>
          <Link
            to="/mazda6config"
            className="mazda6-exterior-main-container-header-link"
          >
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazda6-exterior-main-container-main-part-photos">
          {activeButt === 0 && <img src={arctic_white_solid} />}
          {activeButt === 1 && (
            <img src={mazda6Exterior_deep_blue_crystal_mica} />
          )}
          {activeButt === 2 && <img src={mazda6Exterior_jet_black_mica} />}
          {activeButt === 3 && (
            <img src={mazda6Exterior_machine_grey_metallic} />
          )}
          {activeButt === 4 && (
            <img src={mazda6Exterior_polymetal_grey_metallic} />
          )}
          {activeButt === 5 && (
            <img src={mazda6Exterior_soul_red_crystal_metallic} />
          )}
        </div>
        <div className="mazda6-exterior-main-container-main-part-colors">
          <Fab
            size="medium"
            style={{
              backgroundColor: "#c4c4c4",
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
              backgroundColor: "#1d2842",
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
              backgroundColor: "#000",
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
              backgroundColor: "#606163",
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
              backgroundColor: "#565b61",
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
              backgroundColor: "#980a09",
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

export default Mazda6Exterior;