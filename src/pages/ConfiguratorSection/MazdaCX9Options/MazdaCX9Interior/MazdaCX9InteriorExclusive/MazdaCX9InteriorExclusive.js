import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./MazdaCX9InteriorExclusive.css";
import { NewFooter } from "../../../../../components/New Footer/NewFooter";
import PanelliumMazdaCX9 from "../PanelliumMazdaCX9/PanelliumMazdaCX9";
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

const MazdaCX9InteriorExclusive = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [type, setType] = useState("exclusive");

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
            .filter((m) => m.modelId == 3 && m.gradeId == 7)
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
      <div className="mazdacx9-interior-main-container-exclusive">
        <div className="mazdacx9-interior-main-container-header-exclusive">
          <h3>???????????????? ???????? ??????????????????</h3>
          <Link
            to={{
              pathname: "/mazdacx9config",
              component: interiorChosenColorForConfig,
              params: props.location.params,
              propsSearch: props.location.propsSearch,
            }}
            className="mazdacx9-interior-main-container-header-link-exclusive"
          >
            ?????????????? {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>
        <div className="mazdacx9-interior-main-container-main-part-exclusive">
          <div className="mazdacx9-interior-main-container-main-part-panell-exclusive">
            <PanelliumMazdaCX9 activeButt={activeButt} type={type} />
          </div>
          <div className="mazdacx9-interior-main-container-main-part-colors-exclusive">
            <div className="colorsForPanelliumMazdacx9-container-exclusive">
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
                        handleButtChange(i.id);
                        handleSetColorInterior(i);
                      }}
                    ></FabButton>
                  </Tooltip>
                ))}
            </div>
          </div>
        </div>
        <div className="mazdacx9-equip-details-prices-container">
          <p className="mazdacx9-equip-details-prices-text">
            ???????? ?????????????????????????? ?? 29 ?????????????? 2021 ???????? ???? ???????????????????? 2021 ????????
            ????????????????????????. ?????????????????? ???????????????????? ?????????????????? ?? ???????????????????????? ????????????
            Mazda. ???????????????? ?????????????????????????? ??? 3 ???????? ?????? 100 000 ???? ??????????????.
            ???????????????????? ?????????????????????? ???? ?????????????????? ?????????? ????????????????????. ???????? ??
            ????????????????????????, ?????????????????? ?? ???????????? ??????????-??????????, ?????????? ???????? ????????????????
            ?????? ???????????????????????????????? ??????????????????????. ???????????????????? ?? ?????????? ???? ??????????????????,
            ?????????????????? ???????? ?? ??????????????????????????, ???????????????????????????? ?? ??????????????????
            ??????????-??????????, ?????????? ?????????????????????????? ???????????????????????????? ???????????????? ?? ????
            ???????????????? ??????????????, ?? ??. ??. ?????????????????? (??. 2 ????. 437 ???? ????). ??????????????????
            ???????? ?????????? ???????????????????? ???? ?????????????????????? ?????? ?? ?????????????????????? ??????????????.
            ???????????????????????? ?????????? ?????????????????? ???????????????????????????? ?? ???????????????????????? ??
            ?????????????????? ?????????????????????????????? ???????????????? ??????????-??????????????. ???????????????????????????? ??
            ??????????-?????????? ???????????????????? ?? ?????????????????? ?????????? ???? ????????????????, ?????? ????????????
            ?????????????????? ?????????????? ?? ?????????????? ?? ?????????????????????? ?????????????? ?????? ??????????????. ??????
            ?????????????????? ???????????????????? ?? ?????????????? ??????????????????????, ???????????????????? ??????????, ??
            ?????????? ?????????????????? ???????????????? ???? ?????????????????????? ???? ???????????? ???????????????????? ??
            ???????????????????????? ???????????? ???? ???????????? ????????????.
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaCX9InteriorExclusive;
