import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Mazda6InteriorDrive.css";
import { NewFooter } from "../../../../../components/New Footer/NewFooter";
import PanelliumMazda6 from "../PanelliumMazda6/PanelliumMazda6";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import TabsExterInterMazda6 from "../../Equipment6/TabsExterInterMazda6/TabsExterInterMazda6";

const Mazda6InteriorDrive = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [activeButt, setActiveButt] = useState(0);

  const [type, setType] = useState("drive");
  const handleButtChange = (newValue) => {
    setActiveButt(newValue);
  };

  const [typeofsectionTabs, setTypeofsectionTabs] = useState(0);

  const [linktoTabs, setLinktoTabs] = useState(props.location.propsSearch);

  return (
    <>
      <div className="mazda6-interior-main-container-drive">
        <div className="mazda6-interior-main-container-header-drive">
          <h3>ВЫБЕРИТЕ ЦВЕТ ИНТЕРЬЕРА</h3>
          <Link
            to="/mazda6config"
            className="mazda6-interior-main-container-header-link-drive"
          >
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazda6-interior-main-container-main-part-drive">
          <div className="mazda6-interior-main-container-main-part-panell-drive">
            <PanelliumMazda6 activeButt={activeButt} type={type} />
          </div>
          <div className="mazda6-interior-main-container-main-part-colors-drive">
            <div className="colorsForPanelliumMazda6-container-drive">
              <Fab
                size="medium"
                style={{
                  backgroundColor: "#000",
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
                  backgroundColor: "#5b3131",
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
                aria-label="add"
                onClick={() => handleButtChange(1)}
              ></Fab>
            </div>
          </div>
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

export default Mazda6InteriorDrive;
