import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(90deg, black 9%, rgba(73,63, 252, 1) 100%);
  height: 95px;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem calc((10vw - 100px) / 2);
  z-index: 10;
  color:#fff;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const NavForm = styled.nav`
  
  display: flex;
 
  /* Third Nav */
  /* justify-content: flex-start; */
`;
export const NavLink = styled(Link)`
  color: #fff;
  
  font-size: 19px;
  display: flex;
  text-decoration: none;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 375px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 10px;
    cursor: pointer;
    height: 110%;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media screen and (max-width: 375px) {
    display: block;
    position: absolute;
    top: 5;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -200px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 6px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 0px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;