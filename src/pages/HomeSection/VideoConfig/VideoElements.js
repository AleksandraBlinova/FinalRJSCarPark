import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-context: center;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;
export const HeroBg = styled.div`
  margin-left: 120px;
`;

export const VideoBg = styled.video`
  height: 100%;
  width: 100%;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-left: 340px;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  margin-left: 340px;
  color: #fff;
  font-size: 24px;
  text-align: center;
`;

export const HeroBtn = styled.div`
  margin-top: 32px;
  margin-left: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
