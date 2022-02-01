import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const Btn = styled.div`
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
