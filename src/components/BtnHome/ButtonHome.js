import styled from "styled-components";
import { Link } from "react-scroll";

export const ButtonHome = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#000" : "#AB2233")};
  white-space: nowrap;
  outline: none;
  border-color: black;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ dark }) => (dark ? "#fff" : "#000")};
  padding: ${({ big }) => (big ? "30px 20px  30px" : "30px 20px  30px")};
  width: 200px;
  height: 60px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "grey" : "#AB2233")};
    color: ${({ dark }) => (dark ? "#000" : "#000")};
  }
`;
