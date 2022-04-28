import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./MazdaCX9Exterior.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import mazdacx9_exterior_black from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_black.png";
import mazdacx9_exterior_deep_blue from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_deep_blue.png";
import mazdacx9_exterior_machine_grey from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_machine_grey.png";
import mazdacx9_exterior_polymetal_grey from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_polymetal_grey.png";
import mazdacx9_exterior_snowflake from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_snowflake.png";
import mazdacx9_exterior_soul_red from "./mazdaCX9ExteriorPhotos/mazdacx9_exterior_soul_red.png";
import axios from "axios";
import { styled } from "@mui/material/styles";

const FabButton = styled(Fab)({
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#b71c1c",
    borderColor: "#b71c1c",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #b71c1c",
  },
});
const MazdaCX9Exterior = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const [activeButt, setActiveButt] = useState(1);
  const handleButtChange = (newValue) => {
    setActiveButt(newValue);
  };
  const [typeofsectionTabs, setTypeofsectionTabs] = useState(1);
  const [colors, setColors] = useState();
  const [colorFlag, setColorFlag] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:7831/api/colorsModels/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setColors(
          response.data.filter((item) => item.modelId == 3).map((c) => c.color)
        );
        setColorFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);
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
          {activeButt === 2 && <img src={mazdacx9_exterior_deep_blue} />}
          {activeButt === 5 && <img src={mazdacx9_exterior_black} />}
          {activeButt === 10 && <img src={mazdacx9_exterior_machine_grey} />}
          {activeButt === 9 && <img src={mazdacx9_exterior_polymetal_grey} />}
          {activeButt === 1 && <img src={mazdacx9_exterior_soul_red} />}
          {activeButt === 4 && <img src={mazdacx9_exterior_snowflake} />}
        </div>
        <div className="mazdacx9-exterior-main-container-main-part-colors">
          {colorFlag == true &&
            colors.map((color) => (
              <Tooltip title={color.color1} placement="bottom">
                <Tooltip title={"+" + color.colorExtraCost} placement="top">
                  <FabButton
                    size="small"
                    style={{
                      position: "relative",
                      left: "50%",
                      transform: "translate(-50%, 0)",
                      backgroundColor: color.colorView,
                    }}
                    aria-label="add"
                    onClick={() => handleButtChange(color.id)}
                  ></FabButton>
                </Tooltip>
              </Tooltip>
            ))}
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
