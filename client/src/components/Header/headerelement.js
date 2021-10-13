
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Heading = styled.div`
  background: linear-gradient(90deg, black 9%, rgba(73,63, 252, 1) 100%);
  height: 85px;
  display: flex;
  align-item: end;
  
  justify-content: center;
  padding: 0.1rem calc((10vw - 100px) / 2);
  z-index: 10;
  color:#fff;
  
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 768px) {
    display: block;
    display: center;
    justify-content: center;
    height: 94px;
  }
  @media screen and (max-width: 530px) {
    display: block;
    display: center;
    justify-content: center;
    height: 94px;
    padding-left:60px;
    padding-bottom:5px;
  }
  @media screen and (max-width: 375px) {
    display: block;
    justify-content: center;
    height: 150px;
    
  }
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


`;
