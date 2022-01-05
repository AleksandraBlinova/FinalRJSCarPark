import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HundredyearsContainer = styled.div`
  display: flex;
  justify-context: center;
  align-items: center;
  position: inherited;
  margin-bottom: 40px;
  margin-bottom: 200px;
`;

export const HundredyearsContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HundredyearsImage = styled.div`
  width: 471px;
  height: 550px;
  margin-top: 60px;
  margin-left: 530px;
  margin-right: 500px;
  margin-bottom: 20px;
`;

export const HundredyearsP = styled.p`
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  padding-left: 160px;
  margin-left: 100px;
`;

export const HundredyearsBtn = styled.div`
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
