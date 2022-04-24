import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./MazdaCX5Exterior.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import mazdaCX5_exterior_arctic_white from "./mazdaCX5ExteriorPhotos/mazdaCX5_exterior_arctic_white.jpg";
import mazdaCX5_exterior_black from "./mazdaCX5ExteriorPhotos/mazdaCX5_exterior_black.jpg";
import mazdaCX5_exterior_deep_crystal from "./mazdaCX5ExteriorPhotos/mazdaCX5_exterior_deep_crystal.jpg";
import mazdaCX5_exterior_eternal_blue from "./mazdaCX5ExteriorPhotos/mazdaCX5_exterior_eternal_blue.jpg";
import mazdaCX5_exterior_grey_metallic from "./mazdaCX5ExteriorPhotos/mazdaCX5_exterior_grey_metallic.jpg";
import mazdaCX5_exterior_red_soul from "./mazdaCX5ExteriorPhotos/mazdaCX5_exterior_red_soul.jpg";
import mazdaCX5_exterior_snowflake from "./mazdaCX5ExteriorPhotos/mazdaCX5_exterior_snowflake.jpg";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";

const MazdaCX5Exterior = (props) => {
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
          response.data.filter((item) => item.modelId == 2).map((c) => c.color)
        );
        setColorFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);
  return (
    <>
      <div className="mazdacx5-exterior-tabs-container"></div>
      <div className="mazdacx5-exterior-main-container">
        <div className="mazdacx5-exterior-main-container-header">
          <h3>ВЫБЕРИТЕ ЦВЕТ КУЗОВА</h3>
          <Link
            to="/mazdacx5config"
            className="mazdacx5-exterior-main-container-header-link"
          >
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazdacx5-exterior-main-container-main-part-photos">
          {activeButt === 1 && <img src={mazdaCX5_exterior_red_soul} />}
          {activeButt === 2 && <img src={mazdaCX5_exterior_deep_crystal} />}
          {activeButt === 3 && <img src={mazdaCX5_exterior_arctic_white} />}
          {activeButt === 4 && <img src={mazdaCX5_exterior_snowflake} />}
          {activeButt === 5 && <img src={mazdaCX5_exterior_black} />}

          {activeButt === 6 && <img src={mazdaCX5_exterior_eternal_blue} />}
          {activeButt === 9 && <img src={mazdaCX5_exterior_grey_metallic} />}
        </div>
        <div className="mazdacx5-exterior-main-container-main-part-colors">
          {colorFlag == true &&
            colors.map((color) => (
              <Tooltip title={"+" + color.colorExtraCost} placement="top">
                <Fab
                  size="small"
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    backgroundColor: color.colorView,
                  }}
                  aria-label="add"
                  onClick={() => handleButtChange(color.id)}
                ></Fab>
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

export default MazdaCX5Exterior;
