import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./MazdaCX5InteriorDrive.css";
import { NewFooter } from "../../../../../components/New Footer/NewFooter";
import PanelliumMazdaCX5 from "../PanelliumMazdaCX5/PanelliumMazdaCX5";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";
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
const MazdaCX5InteriorDrive = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [type, setType] = useState("drive");

  const [activeButt, setActiveButt] = useState(0);

  const handleButtChange = (newValue) => {
    setActiveButt(newValue);
  };
  const [interiorColorChosen, setinteriorColorChosen] = useState();

  const [interiorColorChosenLOADFLAG, setinteriorColorChosenLOADFLAG] =
    useState(false);

  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/interiorcolors/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setinteriorColorChosen(
          response.data
            .filter((m) => m.modelId == 2 && m.gradeId == 1)
            .map((e) => e.colorInterior)
        );
        setinteriorColorChosenLOADFLAG(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [interiorChosenColorForConfig, setinteriorChosenColorForConfig] =
    useState();

  const handleSetColorInterior = (newValue) => {
    setinteriorChosenColorForConfig(newValue);
  };

  return (
    <>
      <div className="mazdacx5-interior-main-container-drive">
        <div className="mazdacx5-interior-main-container-header-drive">
          <h3>ВЫБЕРИТЕ ЦВЕТ ИНТЕРЬЕРА</h3>
          <Link
            to={{
              pathname: "/mazdacx5config",
              component: interiorChosenColorForConfig,
              params: props.location.params,
              propsSearch: props.location.propsSearch,
            }}
            className="mazdacx5-interior-main-container-header-link-drive"
          >
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazdacx5-interior-main-container-main-part-drive">
          <div className="mazdacx5-interior-main-container-main-part-panell-drive">
            <PanelliumMazdaCX5 activeButt={activeButt} type={type} />
          </div>
          <div className="mazdacx5-interior-main-container-main-part-colors-drive">
            <div className="colorsForPanelliumMazdacx5-container-drive">
              {interiorColorChosenLOADFLAG &&
                interiorColorChosen.map((i) => (
                  <Tooltip
                    title={i.colorInterior1}
                    placement="bottom"
                    key={i.id}
                  >
                    <FabButton
                      size="medium"
                      style={{
                        background: i.colorInteriorView,
                        position: "relative",
                        left: "50%",
                        transform: "translate(-50%, 0)",
                      }}
                      aria-label="add"
                      onClick={() => {
                        handleButtChange(i.id - 5);
                        handleSetColorInterior(i);
                      }}
                    ></FabButton>
                  </Tooltip>
                ))}
            </div>
          </div>
        </div>
        <div className="mazdacx5-equip-details-prices-container">
          <p className="mazdacx5-equip-details-prices-text">
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

export default MazdaCX5InteriorDrive;
