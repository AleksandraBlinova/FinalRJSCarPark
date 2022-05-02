import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Mazda6Exterior.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import arctic_white_solid from "./mazda6ExteriorPhotos/arctic_white_solid.jpg";
import mazda6Exterior_deep_blue_crystal_mica from "./mazda6ExteriorPhotos/mazda6Exterior_deep_blue_crystal_mica.jpg";
import mazda6Exterior_jet_black_mica from "./mazda6ExteriorPhotos/mazda6Exterior_jet_black_mica.jpg";
import mazda6Exterior_machine_grey_metallic from "./mazda6ExteriorPhotos/mazda6Exterior_machine_grey_metallic.jpg";
import mazda6Exterior_polymetal_grey_metallic from "./mazda6ExteriorPhotos/mazda6Exterior_polymetal_grey_metallic.jpg";
import mazda6Exterior_soul_red_crystal_metallic from "./mazda6ExteriorPhotos/mazda6Exterior_soul_red_crystal_metallic.jpg";

import TabsExterInterMazda6 from "../Equipment6/TabsExterInterMazda6/TabsExterInterMazda6";
import axios from "axios";
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
const Mazda6Exterior = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const [colors, setColors] = useState();
  const [colorFlag, setColorFlag] = useState(false);
  const [activeButt, setActiveButt] = useState(1);
  const handleButtChange = (newValue) => {
    setActiveButt(newValue);
  };

  const [extreriorChosenColorForConfig, setextreriorChosenColorForConfig] =
    useState();

  const handleSetColorExterior = (newValue) => {
    setextreriorChosenColorForConfig(newValue);
  };

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
          response.data.filter((item) => item.modelId == 1).map((c) => c.color)
        );
        setColorFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  return (
    <>
      <div className="mazda6-exterior-tabs-container"></div>
      <div className="mazda6-exterior-main-container">
        <div className="mazda6-exterior-main-container-header">
          <h3>ВЫБЕРИТЕ ЦВЕТ КУЗОВА</h3>
          <Link
            to={{
              pathname: "/mazda6config",
              propsSearch: extreriorChosenColorForConfig,
            }}
            className="mazda6-exterior-main-container-header-link"
          >
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazda6-exterior-main-container-main-part-photos">
          {activeButt === 1 && (
            <img src={mazda6Exterior_soul_red_crystal_metallic} />
          )}
          {activeButt === 2 && (
            <img src={mazda6Exterior_deep_blue_crystal_mica} />
          )}
          {activeButt === 3 && <img src={arctic_white_solid} />}

          {activeButt === 5 && <img src={mazda6Exterior_jet_black_mica} />}

          {activeButt === 9 && (
            <img src={mazda6Exterior_polymetal_grey_metallic} />
          )}
          {activeButt === 10 && (
            <img src={mazda6Exterior_machine_grey_metallic} />
          )}
        </div>
        <div className="mazda6-exterior-main-container-main-part-colors">
          {colorFlag == true &&
            colors.map((color) => (
              <Tooltip
                title={"+" + color.colorExtraCost + " " + color.color1}
                placement="top"
              >
                <FabButton
                  size="small"
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    backgroundColor: color.colorView,
                  }}
                  aria-label="add"
                  onClick={() => {
                    handleButtChange(color.id);
                    handleSetColorExterior(color);
                  }}
                ></FabButton>
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

export default Mazda6Exterior;
