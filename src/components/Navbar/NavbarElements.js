import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
//eslint-disable-next-line
//import { findByLabelText } from '@testing-library/dom'

export const Nav = styled.nav`
  background: #000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 2rem calc((95vw - 1400px) / 2);
  font-size: 18px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  padding: 2.5rem 5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #58067e;
  }
  &:hover {
    transition: all 0.9s eain-out;
    color: #58067e;
  }
`;

export const Bars = styled(FaBars)`
  color: #fff;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    font-size: 17px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ccc4c2;
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
