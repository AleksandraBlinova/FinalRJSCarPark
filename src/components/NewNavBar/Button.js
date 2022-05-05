import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #9e9e9e;
  padding: 10px 22px;
  color: #000;
  border: none;
  cursor: pointer;
  transition: all 0.2s eain-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s eain-out;
    background: #fff;
    color: #010606;
  }
`;
